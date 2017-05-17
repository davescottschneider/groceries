import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Subscription, TeardownLogic } from '../Subscription';
import { Observable } from '../Observable';

/**
 * Returns an Observable that mirrors the source Observable, but will call a specified function when
 * the source terminates on complete or error.
 * @param {function} callback Function to be called when source terminates.
 * @return {Observable} An Observable that mirrors the source, but will call the specified function on termination.
 * @method finally
 * @owner Observable
 */
export function _finally<T>(this: Observable<T>, callback: () => void): Observable<T> {
  return this.lift(new FinallyOperator(callback));
}

class FinallyOperator<T> implements Operator<T, T> {
  constructor(private callback: () => void) {
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new FinallySubscriber(subscriber, this.callback));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class FinallySubscriber<T> extends Subscriber<T> {
  constructor(destination: Subscriber<T>, callback: () => void) {
    super(destination);
    this.add(new Subscription(callback));
  }
}
