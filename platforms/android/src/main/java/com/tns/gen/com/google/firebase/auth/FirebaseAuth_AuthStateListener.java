package com.tns.gen.com.google.firebase.auth;

public class FirebaseAuth_AuthStateListener implements com.google.firebase.auth.FirebaseAuth.AuthStateListener {
	public FirebaseAuth_AuthStateListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onAuthStateChanged(com.google.firebase.auth.FirebaseAuth param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onAuthStateChanged", void.class, args);
	}

}
