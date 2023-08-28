package com.calculator

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CalculatorModule(reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "CalculatorModule" // module명을 바로 return ... js에서 사용 예정

    @ReactMethod
    fun executeCalc(action:String, numberA:Double, numberB:Double, promise: Promise) {
        if ( action === "plus" ) {
            promise.resolve(numberA + numberB)
            return;
        }
        if ( action === "minus" ) {
            promise.resolve(numberA - numberB)
            return;
        }
        if ( action === "multiply" ) {
            promise.resolve(numberA * numberB)
            return;
        }
        if ( action === "divide" ) {
            promise.resolve(numberA / numberB)
            return;
        }

        // 해당하는 것이 없는 경우
        promise.reject("Unexpected action type")
    }
}