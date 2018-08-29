//
//  MobiusMobileWalletUITests.swift
//  MobiusMobileWalletUITests
//
//  Created by Sergey Nebolsin on 22/08/2018.
//  Copyright © 2018 Mobius. All rights reserved.
//

import XCTest

class MobiusMobileWalletUITests: XCTestCase {
        
    override func setUp() {
        super.setUp()
        continueAfterFailure = false
        let app = XCUIApplication()
        setupSnapshot(app)
        app.launch()
    }
    
    override func tearDown() {
        super.tearDown()
    }
    
    func testExample() {
      let react = XCUIApplication().otherElements
      snapshot("0Launch")
      react["setupWalletButton"].tap()
      snapshot("1PinPad")
    }
}
