package com.handle

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

public class HealthDataModule(reactContext:ReactApplicationContext):ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "HealthDataModule"

    // 실제 로직
    @ReactMethod
    fun fetchHealthData(action:String) {
        if ( action === "" ) {
            // promise.resolve();
        }
        return;
    }
}
