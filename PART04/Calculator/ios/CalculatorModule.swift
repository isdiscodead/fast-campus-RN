//
//  CalculatorModule.swift
//  Calculator
//
//  Created by isdiscodead on 10/6/23.
//

import Foundation

@objc(CalculatorModule)
class CalculatorModule:NSObject {
  // 실제로 돌아갈 함수
  @objc(executeCalc:numberA:numberB:resolver:rejector:)
  public func executeCalc(_ action: String, numberA: Int, numberB: Int, resolver:RCTPromiseResolveBlock, rejector: RCTPromiseRejectBlock) -> Void {
    
    if ( action == "plus" ) {
      resolver(numberA + numberB);
      return;
    }
    if ( action == "minus" ) {
      resolver(numberA - numberB);
      return;
    }
    if ( action == "multiply" ) {
      resolver(numberA * numberB);
      return;
    }
    if ( action == "divide" ) {
      resolver(numberA / numberB);
      return;
    }
    
    // 해당되지 않을 경우
    rejector("Unexpected action type", action, nil)
  }
  
}
