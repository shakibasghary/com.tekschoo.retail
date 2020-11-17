$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/AddProductToWishList.feature");
formatter.feature({
  "line": 1,
  "name": "Wishlist feature",
  "description": "",
  "id": "wishlist-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8730161100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 3286027500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 112713200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3757391800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 691021700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 445268300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 419435800,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 113767600,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 453667500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Add product to wish list",
  "description": "",
  "id": "wishlist-feature;add-product-to-wish-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@regression"
    },
    {
      "line": 13,
      "name": "@AddToWishList"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "users hover mouse over heart icon it should show \u0027Add to Wish list\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user clicks on wish list heart icon button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user should see \u0027Success: You have added \u0027 product into the wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductIntoWishList.users_hover_mouse_over_heart_icon_it_should_show_Add_to_Wish_list()"
});
formatter.result({
  "duration": 684294700,
  "status": "passed"
});
formatter.match({
  "location": "AddProductIntoWishList.user_clicks_on_wish_list_heart_icon_button()"
});
formatter.result({
  "duration": 78778000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added ",
      "offset": 17
    }
  ],
  "location": "AddProductIntoWishList.user_should_see_Success_You_have_added_product_into_the_wishlist(String)"
});
formatter.result({
  "duration": 519342400,
  "status": "passed"
});
formatter.after({
  "duration": 894747100,
  "status": "passed"
});
formatter.before({
  "duration": 6461760300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2211442500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 100903300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3684365500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 642548700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 411092300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 419263300,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 107253600,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 388562600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Add product to wish list by clicking on product link",
  "description": "",
  "id": "wishlist-feature;add-product-to-wish-list-by-clicking-on-product-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    },
    {
      "line": 20,
      "name": "@AddToWishList"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user clicks on the image of the product Canon EOS 5D",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "users hover mouse over heart icon it should show \u0027Add to Wish list\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user clicks on wish list heart icon button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should see \u0027Success: You have added \u0027 product into the wishlist",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "AddProductsToShoppingCart.user_clicks_on_the_image_of_the_product_Canon_EOS_D(int)"
});
formatter.result({
  "duration": 1271661800,
  "status": "passed"
});
formatter.match({
  "location": "AddProductIntoWishList.users_hover_mouse_over_heart_icon_it_should_show_Add_to_Wish_list()"
});
formatter.result({
  "duration": 1223706500,
  "status": "passed"
});
formatter.match({
  "location": "AddProductIntoWishList.user_clicks_on_wish_list_heart_icon_button()"
});
formatter.result({
  "duration": 82733000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added ",
      "offset": 17
    }
  ],
  "location": "AddProductIntoWishList.user_should_see_Success_You_have_added_product_into_the_wishlist(String)"
});
formatter.result({
  "duration": 508972300,
  "status": "passed"
});
formatter.after({
  "duration": 870888400,
  "status": "passed"
});
formatter.before({
  "duration": 6413565900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1714998400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 101313700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3668956500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 615138000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 414586100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 410817800,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 106544900,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 367629200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "list of product added into wish list",
  "description": "",
  "id": "wishlist-feature;list-of-product-added-into-wish-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@regression"
    },
    {
      "line": 27,
      "name": "@AddToWishList"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "users hover mouse over heart icon it should show \u0027Add to Wish list\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user clicks on wish list heart icon button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user should see \u0027Success: You have added \u0027 product into the wishlist",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user clicks on wish list button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user should see the list of items added into the wish list",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductIntoWishList.users_hover_mouse_over_heart_icon_it_should_show_Add_to_Wish_list()"
});
formatter.result({
  "duration": 556641200,
  "status": "passed"
});
formatter.match({
  "location": "AddProductIntoWishList.user_clicks_on_wish_list_heart_icon_button()"
});
formatter.result({
  "duration": 78028900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added ",
      "offset": 17
    }
  ],
  "location": "AddProductIntoWishList.user_should_see_Success_You_have_added_product_into_the_wishlist(String)"
});
formatter.result({
  "duration": 443691400,
  "status": "passed"
});
formatter.match({
  "location": "AddProductIntoWishList.user_clicks_on_wish_list_button()"
});
formatter.result({
  "duration": 696547200,
  "status": "passed"
});
formatter.match({
  "location": "AddProductIntoWishList.user_should_see_the_list_of_items_added_into_the_wish_list()"
});
formatter.result({
  "duration": 362806300,
  "status": "passed"
});
formatter.after({
  "duration": 906024300,
  "status": "passed"
});
formatter.uri("Features/AddProductsToShoppingCart.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping Cart on retail website",
  "description": "",
  "id": "shopping-cart-on-retail-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6020521100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1442123600,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 114849700,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 399626200,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Add product into shopping cart scenario one",
  "description": "",
  "id": "shopping-cart-on-retail-website;add-product-into-shopping-cart-scenario-one",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@regression"
    },
    {
      "line": 7,
      "name": "@AddToCart"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user clicks on ADD TO CART button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should see \u0027Success: You have added\u0027 message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_ADD_TO_CART_button()"
});
formatter.result({
  "duration": 94505400,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_Success_You_have_added_message()"
});
formatter.result({
  "duration": 17165895200,
  "status": "passed"
});
formatter.after({
  "duration": 926290300,
  "status": "passed"
});
formatter.before({
  "duration": 6387505000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1614821900,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 111070300,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 406023700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Add product into shopping cart scenario two",
  "description": "",
  "id": "shopping-cart-on-retail-website;add-product-into-shopping-cart-scenario-two",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@regression"
    },
    {
      "line": 13,
      "name": "@AddToCart"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user clicks on the image of the product Canon EOS 5D",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user select available options as \u0027Blue\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters quantity as \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user clicks on blue Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should see \u0027Success: You have added\u0027 message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "AddProductsToShoppingCart.user_clicks_on_the_image_of_the_product_Canon_EOS_D(int)"
});
formatter.result({
  "duration": 1216843400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 34
    }
  ],
  "location": "AddProductsToShoppingCart.user_select_available_options_as_Red(String)"
});
formatter.result({
  "duration": 487185900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "AddProductsToShoppingCart.user_enters_quantity_as(String)"
});
formatter.result({
  "duration": 210944800,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_blue_Add_to_Cart_button()"
});
formatter.result({
  "duration": 204953100,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_Success_You_have_added_message()"
});
formatter.result({
  "duration": 122834800,
  "status": "passed"
});
formatter.after({
  "duration": 891603700,
  "status": "passed"
});
formatter.before({
  "duration": 6127368700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1518912100,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 123766500,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 434043400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "confirmation of quantities of product added to shopping cart",
  "description": "",
  "id": "shopping-cart-on-retail-website;confirmation-of-quantities-of-product-added-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    },
    {
      "line": 21,
      "name": "@AddToCart"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user clicks on the image of the product Canon EOS 5D",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user select available options as \u0027Blue\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user enters quantity as \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user clicks on blue Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user should see \u0027Success: You have added\u0027 message",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on \u0027Shopping Cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user should see quantity of product added to shopping cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "AddProductsToShoppingCart.user_clicks_on_the_image_of_the_product_Canon_EOS_D(int)"
});
formatter.result({
  "duration": 1273071000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 34
    }
  ],
  "location": "AddProductsToShoppingCart.user_select_available_options_as_Red(String)"
});
formatter.result({
  "duration": 510887400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "AddProductsToShoppingCart.user_enters_quantity_as(String)"
});
formatter.result({
  "duration": 216859000,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_blue_Add_to_Cart_button()"
});
formatter.result({
  "duration": 195887700,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_Success_You_have_added_message()"
});
formatter.result({
  "duration": 139181300,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Shopping_Cart()"
});
formatter.result({
  "duration": 115368300,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_quantity_of_product_added_to_shopping_cart()"
});
formatter.result({
  "duration": 426884300,
  "status": "passed"
});
formatter.after({
  "duration": 880595600,
  "status": "passed"
});
formatter.before({
  "duration": 6372939900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1611473300,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 106181400,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 438717500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Confirmation of adding more quantities of product",
  "description": "",
  "id": "shopping-cart-on-retail-website;confirmation-of-adding-more-quantities-of-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@regression"
    },
    {
      "line": 32,
      "name": "@AddToCart"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "user clicks on the image of the product Canon EOS 5D",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user select available options as \u0027Blue\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user enters quantity as \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user clicks on blue Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user should see \u0027Success: You have added\u0027 message",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user clicks on \u0027Shopping Cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user should see quantity of product added to shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user clicks on blue Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user clicks on \u0027Shopping Cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user should see increase in quantities of product added to the cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "AddProductsToShoppingCart.user_clicks_on_the_image_of_the_product_Canon_EOS_D(int)"
});
formatter.result({
  "duration": 1129785100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 34
    }
  ],
  "location": "AddProductsToShoppingCart.user_select_available_options_as_Red(String)"
});
formatter.result({
  "duration": 496690400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "AddProductsToShoppingCart.user_enters_quantity_as(String)"
});
formatter.result({
  "duration": 207037000,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_blue_Add_to_Cart_button()"
});
formatter.result({
  "duration": 197693400,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_Success_You_have_added_message()"
});
formatter.result({
  "duration": 135553100,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Shopping_Cart()"
});
formatter.result({
  "duration": 121302300,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_quantity_of_product_added_to_shopping_cart()"
});
formatter.result({
  "duration": 448566100,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_blue_Add_to_Cart_button()"
});
formatter.result({
  "duration": 348360700,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Shopping_Cart()"
});
formatter.result({
  "duration": 77711200,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_increase_in_quantities_of_product_added_to_the_cart()"
});
formatter.result({
  "duration": 43134300,
  "status": "passed"
});
formatter.after({
  "duration": 870786000,
  "status": "passed"
});
formatter.uri("Features/DataBaseFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Database SQL query feature",
  "description": "",
  "id": "database-sql-query-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6627104300,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Execute all information from Actor Table",
  "description": "",
  "id": "database-sql-query-feature;execute-all-information-from-actor-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@sqlquery"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User connects to PostgreSQL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User sends \"select * from public.actor\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should get all information from that table",
  "keyword": "Then "
});
formatter.match({
  "location": "SqlQueryStepDefinition.user_connects_to_PostgreSQL()"
});
formatter.result({
  "duration": 450633700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select * from public.actor",
      "offset": 12
    }
  ],
  "location": "SqlQueryStepDefinition.user_sends(String)"
});
formatter.result({
  "duration": 333471600,
  "status": "passed"
});
formatter.match({
  "location": "SqlQueryStepDefinition.user_should_get_all_information_from_that_table()"
});
formatter.result({
  "duration": 80460000,
  "status": "passed"
});
formatter.after({
  "duration": 835742200,
  "status": "passed"
});
formatter.uri("Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#@LoginRegression    #This will run all Tags under it\u0027s name"
    }
  ],
  "line": 2,
  "name": "Login to Retail Website",
  "description": "",
  "id": "login-to-retail-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6106648000,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#any steps which are repeated at the begining of all scenario in one feature can be placed"
    },
    {
      "line": 5,
      "value": "#under background keyword and it will reduce code duplicate and writing same steps over an over"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1599702000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 102364700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login to MyAccount",
  "description": "",
  "id": "login-to-retail-website;login-to-myaccount",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    },
    {
      "line": 9,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User Clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3670751400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 626208200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 411293700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 428042600,
  "status": "passed"
});
formatter.after({
  "duration": 851797700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 18,
      "value": "#if i want to run same scenario with multiple userName and Password"
    },
    {
      "line": 19,
      "value": "# Should i copy and past same scenario with multiple user and pass ?"
    }
  ],
  "line": 21,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    },
    {
      "line": 20,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User Clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User enter username \u0027\u003cuserName\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 28,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;1"
    },
    {
      "cells": [
        "sdet@tekschool.us",
        "sdet"
      ],
      "line": 29,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;2"
    },
    {
      "cells": [
        "consumer@tekschool.us",
        "JBond"
      ],
      "line": 30,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;3"
    },
    {
      "cells": [
        "students@tekschool.us",
        "TEST"
      ],
      "line": 31,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6051129800,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#any steps which are repeated at the begining of all scenario in one feature can be placed"
    },
    {
      "line": 5,
      "value": "#under background keyword and it will reduce code duplicate and writing same steps over an over"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1465092000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 104621400,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    },
    {
      "line": 20,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User Clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3663246200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 619291600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 446428900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 416484900,
  "status": "passed"
});
formatter.after({
  "duration": 809391800,
  "status": "passed"
});
formatter.before({
  "duration": 6093558100,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#any steps which are repeated at the begining of all scenario in one feature can be placed"
    },
    {
      "line": 5,
      "value": "#under background keyword and it will reduce code duplicate and writing same steps over an over"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1422588200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 94227000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    },
    {
      "line": 20,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User Clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User enter username \u0027consumer@tekschool.us\u0027 and password \u0027JBond\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3775829700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "consumer@tekschool.us",
      "offset": 21
    },
    {
      "val": "JBond",
      "offset": 58
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 627488800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 422261800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 483444200,
  "status": "passed"
});
formatter.after({
  "duration": 824768600,
  "status": "passed"
});
formatter.before({
  "duration": 6223904100,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#any steps which are repeated at the begining of all scenario in one feature can be placed"
    },
    {
      "line": 5,
      "value": "#under background keyword and it will reduce code duplicate and writing same steps over an over"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1385644000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 110651200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    },
    {
      "line": 20,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User Clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User enter username \u0027students@tekschool.us\u0027 and password \u0027TEST\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3716672100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "students@tekschool.us",
      "offset": 21
    },
    {
      "val": "TEST",
      "offset": 58
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 684022000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 449041600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 426537800,
  "status": "passed"
});
formatter.after({
  "duration": 2042899100,
  "status": "passed"
});
formatter.before({
  "duration": 5999360300,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#any steps which are repeated at the begining of all scenario in one feature can be placed"
    },
    {
      "line": 5,
      "value": "#under background keyword and it will reduce code duplicate and writing same steps over an over"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1481006700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 101912700,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Log out from MyAccount",
  "description": "",
  "id": "login-to-retail-website;log-out-from-myaccount",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@regression"
    },
    {
      "line": 33,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "User Clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User Clicks on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User click on Logout",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User Should be logged out from MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3647194400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 658051800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 423459700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 403514400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 82789500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.User_click_on_Logout()"
});
formatter.result({
  "duration": 425819700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.User_Should_be_logged_out_from_MyAccount_dashboard()"
});
formatter.result({
  "duration": 405041500,
  "status": "passed"
});
formatter.after({
  "duration": 833531900,
  "status": "passed"
});
formatter.uri("Features/RemoveProductFromWishList.feature");
formatter.feature({
  "line": 1,
  "name": "Wishlist feature",
  "description": "",
  "id": "wishlist-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6205303600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Clicks on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "users hover mouse over heart icon it should show \u0027Add to Wish list\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on wish list heart icon button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should see \u0027Success: You have added \u0027 product into the wishlist",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user clicks on wish list button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should see the list of items added into the wish list",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1820653300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 103078000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3703427000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 631416400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 384877500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 403074800,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 98168900,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 370354800,
  "status": "passed"
});
formatter.match({
  "location": "AddProductIntoWishList.users_hover_mouse_over_heart_icon_it_should_show_Add_to_Wish_list()"
});
formatter.result({
  "duration": 596322500,
  "status": "passed"
});
formatter.match({
  "location": "AddProductIntoWishList.user_clicks_on_wish_list_heart_icon_button()"
});
formatter.result({
  "duration": 82866000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added ",
      "offset": 17
    }
  ],
  "location": "AddProductIntoWishList.user_should_see_Success_You_have_added_product_into_the_wishlist(String)"
});
formatter.result({
  "duration": 448552500,
  "status": "passed"
});
formatter.match({
  "location": "AddProductIntoWishList.user_clicks_on_wish_list_button()"
});
formatter.result({
  "duration": 714970700,
  "status": "passed"
});
formatter.match({
  "location": "AddProductIntoWishList.user_should_see_the_list_of_items_added_into_the_wish_list()"
});
formatter.result({
  "duration": 351084900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Remove product from wish list",
  "description": "",
  "id": "wishlist-feature;remove-product-from-wish-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    },
    {
      "line": 17,
      "name": "@RemoveFromWishList"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user clicks on red \u0027X\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user should the message \u0027Your wish list is empty.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "RemoveProductFromWishList.user_clicks_on_red_X_button()"
});
formatter.result({
  "duration": 410100700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your wish list is empty.",
      "offset": 25
    }
  ],
  "location": "RemoveProductFromWishList.user_should_the_message_Your_wish_list_is_empty(String)"
});
formatter.result({
  "duration": 50995400,
  "status": "passed"
});
formatter.after({
  "duration": 826744500,
  "status": "passed"
});
formatter.uri("Features/RemovingProductsFromShoppingCart.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping Cart on retail website",
  "description": "",
  "id": "shopping-cart-on-retail-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6203869800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on the image of the product Canon EOS 5D",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user select available options as \u0027Blue\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters quantity as \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on blue Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user should see \u0027Success: You have added\u0027 message",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027Shopping Cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should see quantity of product added to shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1458828800,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 109858300,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 452240600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "AddProductsToShoppingCart.user_clicks_on_the_image_of_the_product_Canon_EOS_D(int)"
});
formatter.result({
  "duration": 1307597100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 34
    }
  ],
  "location": "AddProductsToShoppingCart.user_select_available_options_as_Red(String)"
});
formatter.result({
  "duration": 475666300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "AddProductsToShoppingCart.user_enters_quantity_as(String)"
});
formatter.result({
  "duration": 440931800,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_blue_Add_to_Cart_button()"
});
formatter.result({
  "duration": 249561600,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_Success_You_have_added_message()"
});
formatter.result({
  "duration": 190748800,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Shopping_Cart()"
});
formatter.result({
  "duration": 132014400,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_quantity_of_product_added_to_shopping_cart()"
});
formatter.result({
  "duration": 433821500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Removing product from shopping cart",
  "description": "",
  "id": "shopping-cart-on-retail-website;removing-product-from-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    },
    {
      "line": 15,
      "name": "@RemoveFromCart"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user clicks on \u0027X\u0027 mark next to the product on shopping cart",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the item should be removed and \u0027Your shopping cart is empty!\u0027 message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RemoveProductFromShoppingCart.user_clicks_on_X_mark_next_to_the_product_on_shopping_cart()"
});
formatter.result({
  "duration": 107949200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your shopping cart is empty!",
      "offset": 32
    }
  ],
  "location": "RemoveProductFromShoppingCart.the_item_should_be_removed_and_Your_shopping_cart_is_empty_message_is_displayed(String)"
});
formatter.result({
  "duration": 486362400,
  "status": "passed"
});
formatter.after({
  "duration": 869183600,
  "status": "passed"
});
formatter.uri("Features/RetailTestScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Retail Test Scenarios",
  "description": "",
  "id": "retail-test-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5997042700,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1459370900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Register Account for new Retail user",
  "description": "",
  "id": "retail-test-scenarios;register-account-for-new-retail-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User Clicks on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on Register",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User fill out Register form with below information",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "phone",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "James",
        "Madison",
        "jmadison@max.com",
        "1112223344",
        "james123"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User select \u0027yes\u0027 for Subscribe",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on privacy and policy check box",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User Should see message \u0027Your Account Has Been Created!\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 104031200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterFormStepDefinition.user_click_on_Register()"
});
formatter.result({
  "duration": 663710600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterFormStepDefinition.user_fill_out_Register_form_with_below_information(DataTable)"
});
formatter.result({
  "duration": 924703500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterFormStepDefinition.user_select_yes_for_Subscribe()"
});
formatter.result({
  "duration": 480189000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterFormStepDefinition.user_click_on_privacy_and_policy_check_box()"
});
formatter.result({
  "duration": 116002900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterFormStepDefinition.user_click_on_Continue_button()"
});
formatter.result({
  "duration": 553544600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Account Has Been Created!",
      "offset": 25
    }
  ],
  "location": "RegisterFormStepDefinition.user_Should_see_message_Your_Account_Has_Been_Created(String)"
});
formatter.result({
  "duration": 5355608800,
  "status": "passed"
});
formatter.after({
  "duration": 832228900,
  "status": "passed"
});
formatter.uri("Features/ShoppingCartCheckoutPage.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping Cart Checkout page manipulation",
  "description": "",
  "id": "shopping-cart-checkout-page-manipulation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6181821100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on Retail Website",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on ADD TO CART button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user select available options as \u0027Blue\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters quantity as \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user clicks on blue Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should see \u0027Success: You have added\u0027 message",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on \u0027Shopping Cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user should see quantity of product added to shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1749614500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 725767800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 95503500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3661321300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 656500900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 623775000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 405418700,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 99988000,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 427441000,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_ADD_TO_CART_button()"
});
formatter.result({
  "duration": 98584200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 34
    }
  ],
  "location": "AddProductsToShoppingCart.user_select_available_options_as_Red(String)"
});
formatter.result({
  "duration": 2617329800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "AddProductsToShoppingCart.user_enters_quantity_as(String)"
});
formatter.result({
  "duration": 205726600,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_blue_Add_to_Cart_button()"
});
formatter.result({
  "duration": 351340400,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_Success_You_have_added_message()"
});
formatter.result({
  "duration": 277938200,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Shopping_Cart()"
});
formatter.result({
  "duration": 111044800,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_quantity_of_product_added_to_shopping_cart()"
});
formatter.result({
  "duration": 402024100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "confirm calculation of price x quantity of total",
  "description": "",
  "id": "shopping-cart-checkout-page-manipulation;confirm-calculation-of-price-x-quantity-of-total",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    },
    {
      "line": 20,
      "name": "@CheckOut"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user clicks View Cart",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user confirms that Quantity field , Unit Price and Total is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user update the quantity to \u00272\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user clicks on refresh icon",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user should see updated unit price x quanitity of total",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_View_Cart()"
});
formatter.result({
  "duration": 496828900,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_confirms_that_Quantity_field_Unit_Price_and_Total_is_displayed()"
});
formatter.result({
  "duration": 135302500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "ShoppingCartCheckoutPageStepDefinition.user_update_the_quantity_to(String)"
});
formatter.result({
  "duration": 182019700,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_on_refresh_icon()"
});
formatter.result({
  "duration": 849320800,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_should_see_updated_unit_price_x_quanitity_of_total()"
});
formatter.result({
  "duration": 46394300,
  "status": "passed"
});
formatter.after({
  "duration": 1018060900,
  "status": "passed"
});
formatter.before({
  "duration": 6172346100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on Retail Website",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on ADD TO CART button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user select available options as \u0027Blue\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters quantity as \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user clicks on blue Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should see \u0027Success: You have added\u0027 message",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on \u0027Shopping Cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user should see quantity of product added to shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2284483200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 752477500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 96350900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3682594200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 645731600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 512200900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 430919900,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 87263600,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 456719700,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_ADD_TO_CART_button()"
});
formatter.result({
  "duration": 90114400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 34
    }
  ],
  "location": "AddProductsToShoppingCart.user_select_available_options_as_Red(String)"
});
formatter.result({
  "duration": 2389568100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "AddProductsToShoppingCart.user_enters_quantity_as(String)"
});
formatter.result({
  "duration": 192568000,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_blue_Add_to_Cart_button()"
});
formatter.result({
  "duration": 188303000,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_Success_You_have_added_message()"
});
formatter.result({
  "duration": 142553200,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Shopping_Cart()"
});
formatter.result({
  "duration": 94730100,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_quantity_of_product_added_to_shopping_cart()"
});
formatter.result({
  "duration": 381671100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "user adds coupon code into shopping cart",
  "description": "",
  "id": "shopping-cart-checkout-page-manipulation;user-adds-coupon-code-into-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@regression"
    },
    {
      "line": 28,
      "name": "@CheckOut"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user clicks View Cart",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user sees \u0027What would you like to do next?\u0027 message in shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user clicks on \u0027Use Coupon Code\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user enters \u0027sample\u0027 coupon code",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user clicks on \u0027Apply coupon\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user should successfully see coupon added",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_View_Cart()"
});
formatter.result({
  "duration": 459899200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What would you like to do next?",
      "offset": 11
    }
  ],
  "location": "ShoppingCartCheckoutPageStepDefinition.user_sees_What_would_you_like_to_do_next_message_in_shopping_cart(String)"
});
formatter.result({
  "duration": 53303100,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_on_Use_Coupon_Code()"
});
formatter.result({
  "duration": 134576200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sample",
      "offset": 13
    }
  ],
  "location": "ShoppingCartCheckoutPageStepDefinition.user_enters_sample_coupon_code(String)"
});
formatter.result({
  "duration": 174316900,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_on_Apply_coupon_button()"
});
formatter.result({
  "duration": 147792200,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_should_successfully_see_coupon_added()"
});
formatter.result({
  "duration": 114241300,
  "status": "passed"
});
formatter.after({
  "duration": 920546200,
  "status": "passed"
});
formatter.before({
  "duration": 6002346400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on Retail Website",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on ADD TO CART button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user select available options as \u0027Blue\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters quantity as \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user clicks on blue Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should see \u0027Success: You have added\u0027 message",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on \u0027Shopping Cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user should see quantity of product added to shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1437309900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 745786400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 93076300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3669514800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 643077500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 506399100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 417403500,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 100948500,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 399212900,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_ADD_TO_CART_button()"
});
formatter.result({
  "duration": 97853000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 34
    }
  ],
  "location": "AddProductsToShoppingCart.user_select_available_options_as_Red(String)"
});
formatter.result({
  "duration": 1188047900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "AddProductsToShoppingCart.user_enters_quantity_as(String)"
});
formatter.result({
  "duration": 494628300,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_blue_Add_to_Cart_button()"
});
formatter.result({
  "duration": 424065600,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_Success_You_have_added_message()"
});
formatter.result({
  "duration": 178906900,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Shopping_Cart()"
});
formatter.result({
  "duration": 117590000,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_quantity_of_product_added_to_shopping_cart()"
});
formatter.result({
  "duration": 449568200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "User completes Estimate Shipping \u0026 Taxes section",
  "description": "",
  "id": "shopping-cart-checkout-page-manipulation;user-completes-estimate-shipping-\u0026-taxes-section",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@regression"
    },
    {
      "line": 37,
      "name": "@CheckOut"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user clicks View Cart",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "user sees \u0027What would you like to do next?\u0027 message in shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user clicks on Estimate Shipping \u0026 Taxes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user selects \u0027Afghanistan\u0027 as country",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user selects Region/State as \u0027Kabul\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user enters Post Code as \u002795351\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user clicks on \u0027Get Quotes\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user clicks on \u0027Flat Shipping Rate\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user clicks on \u0027Apply Shipping\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user sees \u0027Success: Your shipping estimate has been applied!\u0027 message",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_View_Cart()"
});
formatter.result({
  "duration": 478741000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What would you like to do next?",
      "offset": 11
    }
  ],
  "location": "ShoppingCartCheckoutPageStepDefinition.user_sees_What_would_you_like_to_do_next_message_in_shopping_cart(String)"
});
formatter.result({
  "duration": 53327400,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_on_Estimate_Shipping_Taxes()"
});
formatter.result({
  "duration": 278948100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Afghanistan",
      "offset": 14
    }
  ],
  "location": "ShoppingCartCheckoutPageStepDefinition.user_selects_Afghanistan_as_country(String)"
});
formatter.result({
  "duration": 534791600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kabul",
      "offset": 30
    }
  ],
  "location": "ShoppingCartCheckoutPageStepDefinition.user_selects_Region_State_as_Kabul(String)"
});
formatter.result({
  "duration": 364596900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "95351",
      "offset": 26
    }
  ],
  "location": "ShoppingCartCheckoutPageStepDefinition.user_enters_Post_Code_as(String)"
});
formatter.result({
  "duration": 237068900,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_on_Get_Quotes_button()"
});
formatter.result({
  "duration": 104551500,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_on_Flat_Shipping_Rate_button()"
});
formatter.result({
  "duration": 166088300,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_on_Apply_Shipping_button()"
});
formatter.result({
  "duration": 88044300,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_should_see_Success_Your_shipping_estimate_has_been_applied_message()"
});
formatter.result({
  "duration": 388393800,
  "status": "passed"
});
formatter.after({
  "duration": 847294000,
  "status": "passed"
});
formatter.before({
  "duration": 6144180500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on Retail Website",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on ADD TO CART button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user select available options as \u0027Blue\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters quantity as \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user clicks on blue Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should see \u0027Success: You have added\u0027 message",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on \u0027Shopping Cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user should see quantity of product added to shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1526940700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 760058400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 108113500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3643566100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 600466200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 519221000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 408159400,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 108055500,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 387386800,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_ADD_TO_CART_button()"
});
formatter.result({
  "duration": 107770600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 34
    }
  ],
  "location": "AddProductsToShoppingCart.user_select_available_options_as_Red(String)"
});
formatter.result({
  "duration": 1772482400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "AddProductsToShoppingCart.user_enters_quantity_as(String)"
});
formatter.result({
  "duration": 230221300,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_blue_Add_to_Cart_button()"
});
formatter.result({
  "duration": 197747100,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_Success_You_have_added_message()"
});
formatter.result({
  "duration": 137766300,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Shopping_Cart()"
});
formatter.result({
  "duration": 110860500,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_quantity_of_product_added_to_shopping_cart()"
});
formatter.result({
  "duration": 412726200,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Users applies gift certificate into shopping cart",
  "description": "",
  "id": "shopping-cart-checkout-page-manipulation;users-applies-gift-certificate-into-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@regression"
    },
    {
      "line": 50,
      "name": "@CheckOut"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "user clicks View Cart",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "user sees \u0027What would you like to do next?\u0027 message in shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user clicks Use Gift Certificate section",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user enters \u0027sample\u0027 gift certificate code",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "user clicks on \u0027Apply Gift Certificate\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "user should successfully add the gift certificate",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_View_Cart()"
});
formatter.result({
  "duration": 461163400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What would you like to do next?",
      "offset": 11
    }
  ],
  "location": "ShoppingCartCheckoutPageStepDefinition.user_sees_What_would_you_like_to_do_next_message_in_shopping_cart(String)"
});
formatter.result({
  "duration": 52510400,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_Use_Gift_Certificate_section()"
});
formatter.result({
  "duration": 484531200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sample",
      "offset": 13
    }
  ],
  "location": "ShoppingCartCheckoutPageStepDefinition.user_enters_sample_gift_certificate_code(String)"
});
formatter.result({
  "duration": 150110100,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_on_Apply_Gift_Certificate()"
});
formatter.result({
  "duration": 109386100,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_should_successfully_add_the_gift_certificate()"
});
formatter.result({
  "duration": 473046400,
  "status": "passed"
});
formatter.after({
  "duration": 869738300,
  "status": "passed"
});
formatter.before({
  "duration": 6073654800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on Retail Website",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on ADD TO CART button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user select available options as \u0027Blue\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters quantity as \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user clicks on blue Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should see \u0027Success: You have added\u0027 message",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on \u0027Shopping Cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user should see quantity of product added to shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1438991200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 759045900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 99321200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3707534400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 631907900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 516260700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 416722200,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 97693700,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 452424300,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_ADD_TO_CART_button()"
});
formatter.result({
  "duration": 96840100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 34
    }
  ],
  "location": "AddProductsToShoppingCart.user_select_available_options_as_Red(String)"
});
formatter.result({
  "duration": 1742308800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "AddProductsToShoppingCart.user_enters_quantity_as(String)"
});
formatter.result({
  "duration": 201343200,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_blue_Add_to_Cart_button()"
});
formatter.result({
  "duration": 181998000,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_Success_You_have_added_message()"
});
formatter.result({
  "duration": 212437500,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Shopping_Cart()"
});
formatter.result({
  "duration": 122034300,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_quantity_of_product_added_to_shopping_cart()"
});
formatter.result({
  "duration": 444872200,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Confirmation of checkout table fields",
  "description": "",
  "id": "shopping-cart-checkout-page-manipulation;confirmation-of-checkout-table-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@regression"
    },
    {
      "line": 59,
      "name": "@CheckOut"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "user clicks View Cart",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "user sees \u0027What would you like to do next?\u0027 message in shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user clicks on Estimate Shipping \u0026 Taxes",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user selects \u0027Afghanistan\u0027 as country",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "user selects Region/State as \u0027Kabul\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user enters Post Code as \u002795351\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user clicks on \u0027Get Quotes\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "user clicks on \u0027Flat Shipping Rate\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "user clicks on \u0027Apply Shipping\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "user sees \u0027Success: Your shipping estimate has been applied!\u0027 message",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "user should be able to see \u0027Sub-Total\u0027 at the end of shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "user should be able to see \u0027Flat Shipping Rate\u0027 at the end of shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "user should be able to see \u0027Total\u0027 at the end of shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "user clicks on Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "user should get to \u0027Checkout\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_View_Cart()"
});
formatter.result({
  "duration": 506974200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What would you like to do next?",
      "offset": 11
    }
  ],
  "location": "ShoppingCartCheckoutPageStepDefinition.user_sees_What_would_you_like_to_do_next_message_in_shopping_cart(String)"
});
formatter.result({
  "duration": 63412000,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_on_Estimate_Shipping_Taxes()"
});
formatter.result({
  "duration": 28074725600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Afghanistan",
      "offset": 14
    }
  ],
  "location": "ShoppingCartCheckoutPageStepDefinition.user_selects_Afghanistan_as_country(String)"
});
formatter.result({
  "duration": 488280300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kabul",
      "offset": 30
    }
  ],
  "location": "ShoppingCartCheckoutPageStepDefinition.user_selects_Region_State_as_Kabul(String)"
});
formatter.result({
  "duration": 398528700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "95351",
      "offset": 26
    }
  ],
  "location": "ShoppingCartCheckoutPageStepDefinition.user_enters_Post_Code_as(String)"
});
formatter.result({
  "duration": 205622200,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_on_Get_Quotes_button()"
});
formatter.result({
  "duration": 96177900,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_on_Flat_Shipping_Rate_button()"
});
formatter.result({
  "duration": 192660300,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_on_Apply_Shipping_button()"
});
formatter.result({
  "duration": 103758800,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_should_see_Success_Your_shipping_estimate_has_been_applied_message()"
});
formatter.result({
  "duration": 417446000,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_should_be_able_to_see_Sub_Total_at_the_end_of_shopping_cart()"
});
formatter.result({
  "duration": 49522900,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_should_be_able_to_see_Flat_Shipping_Rate_at_the_end_of_shopping_cart()"
});
formatter.result({
  "duration": 40513000,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_should_be_able_to_see_Total_at_the_end_of_shopping_cart()"
});
formatter.result({
  "duration": 41082100,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartCheckoutPageStepDefinition.user_clicks_on_CheckOut_Button()"
});
formatter.result({
  "duration": 413149100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 20
    }
  ],
  "location": "ShoppingCartCheckoutPageStepDefinition.user_should_get_to_CheckOut_page(String)"
});
formatter.result({
  "duration": 433156100,
  "status": "passed"
});
formatter.after({
  "duration": 2363006800,
  "status": "passed"
});
formatter.uri("Features/currency.feature");
formatter.feature({
  "line": 1,
  "name": "currency manipulation",
  "description": "",
  "id": "currency-manipulation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6462440000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on Retail Website",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 4340490100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1049035300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 102219100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3731529800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 610810600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 566420800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 432833300,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 97973400,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 927356900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "All three currencies should be present",
  "description": "",
  "id": "currency-manipulation;all-three-currencies-should-be-present",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    },
    {
      "line": 14,
      "name": "@Currency"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user clicks on Currency button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user should be able to see Euro , Pound Sterling and US Dollar button",
  "keyword": "Then "
});
formatter.match({
  "location": "CurrencyManipulation.user_clicks_on_Currency_button()"
});
formatter.result({
  "duration": 172871800,
  "status": "passed"
});
formatter.match({
  "location": "CurrencyManipulation.user_should_be_able_to_see_Euro_Pound_Sterling_and_US_Dollar_button()"
});
formatter.result({
  "duration": 450990200,
  "status": "passed"
});
formatter.after({
  "duration": 822159500,
  "status": "passed"
});
formatter.before({
  "duration": 5963603300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on Retail Website",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1941447900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 807081800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 101554500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3745058900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 627589400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 469211200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 403501600,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 100857100,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 417025400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "currency should be visible under product description",
  "description": "",
  "id": "currency-manipulation;currency-should-be-visible-under-product-description",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    },
    {
      "line": 18,
      "name": "@Currency"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user clicks on Currency button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user clicks on US Dollar Button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user should see price change under product description",
  "keyword": "Then "
});
formatter.match({
  "location": "CurrencyManipulation.user_clicks_on_Currency_button()"
});
formatter.result({
  "duration": 107017400,
  "status": "passed"
});
formatter.match({
  "location": "CurrencyManipulation.user_clicks_on_US_Dollar_Button()"
});
formatter.result({
  "duration": 612054200,
  "status": "passed"
});
formatter.match({
  "location": "CurrencyManipulation.user_should_see_price_change_under_product_description()"
});
formatter.result({
  "duration": 530230500,
  "status": "passed"
});
formatter.after({
  "duration": 831204200,
  "status": "passed"
});
formatter.before({
  "duration": 6213382300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on Retail Website",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2571694700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 761080400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 99443600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3707412300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 613183700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 483732000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 434609600,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 96551800,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 448087400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "currency should be visible under product details",
  "description": "",
  "id": "currency-manipulation;currency-should-be-visible-under-product-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@regression"
    },
    {
      "line": 24,
      "name": "@Currency"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "user clicks on the image of the product Canon EOS 5D",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user should be able to see the US Dollar Currency",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "AddProductsToShoppingCart.user_clicks_on_the_image_of_the_product_Canon_EOS_D(int)"
});
formatter.result({
  "duration": 18691074300,
  "status": "passed"
});
formatter.match({
  "location": "CurrencyManipulation.user_should_be_able_to_see_the_US_Dollar_Currency()"
});
formatter.result({
  "duration": 703676100,
  "status": "passed"
});
formatter.after({
  "duration": 932806900,
  "status": "passed"
});
formatter.before({
  "duration": 6051189800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on Retail Website",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1577571400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 763457900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 92087400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3695888300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 645859600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 521107800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 408460100,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 101441500,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 445096700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "currency should be visible under shopping cart",
  "description": "",
  "id": "currency-manipulation;currency-should-be-visible-under-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@regression"
    },
    {
      "line": 29,
      "name": "@Currency"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "user clicks on the image of the product Canon EOS 5D",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user clicks on the image of the product Canon EOS 5D",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user select available options as \u0027Blue\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user enters quantity as \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user clicks on blue Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user should see \u0027Success: You have added\u0027 message",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user clicks on \u0027Shopping Cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Then user should be able to see the US Dollar Currency",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "AddProductsToShoppingCart.user_clicks_on_the_image_of_the_product_Canon_EOS_D(int)"
});
formatter.result({
  "duration": 9090007700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "AddProductsToShoppingCart.user_clicks_on_the_image_of_the_product_Canon_EOS_D(int)"
});
formatter.result({
  "duration": 2494751900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 34
    }
  ],
  "location": "AddProductsToShoppingCart.user_select_available_options_as_Red(String)"
});
formatter.result({
  "duration": 530100100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "AddProductsToShoppingCart.user_enters_quantity_as(String)"
});
formatter.result({
  "duration": 602373600,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_blue_Add_to_Cart_button()"
});
formatter.result({
  "duration": 207624300,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_should_see_Success_You_have_added_message()"
});
formatter.result({
  "duration": 168828000,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Shopping_Cart()"
});
formatter.result({
  "duration": 105210100,
  "status": "passed"
});
formatter.match({
  "location": "CurrencyManipulation.then_user_should_be_able_to_see_the_US_Dollar_Currency()"
});
formatter.result({
  "duration": 461773300,
  "status": "passed"
});
formatter.after({
  "duration": 947999400,
  "status": "passed"
});
formatter.before({
  "duration": 6346528400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on Retail Website",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1534097500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 696881800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 93131700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3748165700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 628014600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 481508500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 411058900,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 93711500,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 381351300,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "currency should be visible under wish list cart",
  "description": "",
  "id": "currency-manipulation;currency-should-be-visible-under-wish-list-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@regression"
    },
    {
      "line": 40,
      "name": "@Currency"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "user clicks on wish list heart icon button",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "user should see \u0027Success: You have added \u0027 product into the wishlist",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user clicks on wish list button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user should see the list of items added into the wish list",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Then the currency should be US dollar",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductIntoWishList.user_clicks_on_wish_list_heart_icon_button()"
});
formatter.result({
  "duration": 127044200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added ",
      "offset": 17
    }
  ],
  "location": "AddProductIntoWishList.user_should_see_Success_You_have_added_product_into_the_wishlist(String)"
});
formatter.result({
  "duration": 495305000,
  "status": "passed"
});
formatter.match({
  "location": "AddProductIntoWishList.user_clicks_on_wish_list_button()"
});
formatter.result({
  "duration": 679715900,
  "status": "passed"
});
formatter.match({
  "location": "AddProductIntoWishList.user_should_see_the_list_of_items_added_into_the_wish_list()"
});
formatter.result({
  "duration": 423087600,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepDefinitions.AddProductIntoWishList.user_should_see_the_list_of_items_added_into_the_wish_list(AddProductIntoWishList.java:46)\r\n\tat ✽.And user should see the list of items added into the wish list(Features/currency.feature:46)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CurrencyManipulation.then_the_currency_should_be_US_dollar()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1383632100,
  "status": "passed"
});
formatter.before({
  "duration": 5953695700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on Retail Website",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1753399600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 768432800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 100488300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3647047400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 628080900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 469334600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 407674300,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 107249900,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 387714000,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "default currency should be US Dollar upon login",
  "description": "",
  "id": "currency-manipulation;default-currency-should-be-us-dollar-upon-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@regression"
    },
    {
      "line": 48,
      "name": "@Currency"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "user should see US dollar as default currency",
  "keyword": "Then "
});
formatter.match({
  "location": "CurrencyManipulation.user_should_see_US_dollar_as_default_currency()"
});
formatter.result({
  "duration": 389953500,
  "status": "passed"
});
formatter.after({
  "duration": 870821300,
  "status": "passed"
});
formatter.before({
  "duration": 6037716600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on Retail Website",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on \u0027Cameras\u0027 from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027Canon\u0027 from dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1570357300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 779825700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 91001900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3687785900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 614940900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 527600600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 416385900,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Cameras_from_products_menu()"
});
formatter.result({
  "duration": 97088600,
  "status": "passed"
});
formatter.match({
  "location": "AddProductsToShoppingCart.user_clicks_on_Canon_from_dropdown_list()"
});
formatter.result({
  "duration": 438005200,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "select different currency as default when logging in and out",
  "description": "",
  "id": "currency-manipulation;select-different-currency-as-default-when-logging-in-and-out",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@regression"
    },
    {
      "line": 52,
      "name": "@Currency"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "user clicks on Currency button",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "user selects different currency like \u0027Pound Sterling\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User click on Logout",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User Should be logged out from MyAccount dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User Clicks on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User should see Pound Sterling as default currency",
  "keyword": "Then "
});
formatter.match({
  "location": "CurrencyManipulation.user_clicks_on_Currency_button()"
});
formatter.result({
  "duration": 100053200,
  "status": "passed"
});
formatter.match({
  "location": "CurrencyManipulation.user_selects_different_currency_like_Pound_Sterling()"
});
formatter.result({
  "duration": 489730200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 86589300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.User_click_on_Logout()"
});
formatter.result({
  "duration": 409678200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.User_Should_be_logged_out_from_MyAccount_dashboard()"
});
formatter.result({
  "duration": 366304100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 82325800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3647868700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 598796100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 3908394600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 395129500,
  "status": "passed"
});
formatter.match({
  "location": "CurrencyManipulation.user_should_see_Pound_Sterling_as_default_currency()"
});
formatter.result({
  "duration": 365195500,
  "status": "passed"
});
formatter.after({
  "duration": 889876500,
  "status": "passed"
});
});