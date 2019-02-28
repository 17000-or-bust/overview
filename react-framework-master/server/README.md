# 17001 || BUST: OVERVIEW API v1.0

 ## <a style="color: #333333">Table of Contents</a>
* [**Restaurants.restaurant**](#restaurantsrestaurant)
    * [GET /api/overview/:restaurantId](#get-restaurantid)
    * [POST /api/overview](#post-restaurantid)
    * [PUT /api/overview/:restaurantId](#put-restaurantid)
    * [DELETE /api/overview/:restaurantId](#delete-restaurantid)
<hr>

 ## Restaurants.restaurants
### `GET /api/overview/:restaurantId`
Returns a `{ restaurant }` at a given restaurant id.

 **URL Params**
  * `restaurantId` _(Number)_ : ID of the restaurant that will retrieve relevant details

 **Success Response:**
  * **Status Code:** 200
  * **Content:** `{ restaurant }` conforming to the following format:

   |Key              |Type    |
   |:--------------- |:------ |
   |`id`             |Number  |
   |`restaurant_id`  |Number  |
   |`street_address` |String  |
   |`cross_street`   |String  |
   |`neighborhood`   |String  |
   |`brunch_hrs`     |String  |
   |`lunch_hrs`      |String  |
   |`dinner_hrs`     |String  |
   |`food_type`      |String  |
   |`dining_style`   |String  |
   |`payment_options`|String  |
   |`chef`           |String  |
   |`website`        |String  |
   |`phone_number`   |String  |
   |`longitude`      |Number  |
   |`latitude`       |Number  |

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `POST /api/overview`
Returns the `id` of the reservation created in the database.

 **Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

   |Key              |Type    |
   |:--------------- |:------ |
   |`restaurant_id`  |Number  |
   |`street_address` |String  |
   |`cross_street`   |String  |
   |`neighborhood`   |String  |
   |`brunch_hrs`     |String  |
   |`lunch_hrs`      |String  |
   |`dinner_hrs`     |String  |
   |`food_type`      |String  |
   |`dining_style`   |String  |
   |`payment_options`|String  |
   |`chef`           |String  |
   |`website`        |String  |
   |`phone_number`   |String  |
   |`longitude`      |Number  |
   |`latitude`       |Number  |

 **Success Response:**
  * **Status Code:** 201
  * **Content:** `{ id }`

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `PUT /api/overview/:restaurantId`
Returns the `restaurantId (number)` of the reservation edited in the database.

 **URL Params**
  * `restaurantId` _(Number)_ : ID of the reservation to update

 **Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

   |Key              |Type    |
   |:--------------- |:------ |
   |`id`             |Number  |
   |`restaurant_id`  |Number  |
   |`street_address` |String  |
   |`cross_street`   |String  |
   |`neighborhood`   |String  |
   |`brunch_hrs`     |String  |
   |`lunch_hrs`      |String  |
   |`dinner_hrs`     |String  |
   |`food_type`      |String  |
   |`dining_style`   |String  |
   |`payment_options`|String  |
   |`chef`           |String  |
   |`website`        |String  |
   |`phone_number`   |String  |
   |`longitude`      |Number  |
   |`latitude`       |Number  |

 **Success Response:**
  * **Status Code:** 201
  * **Content:** `{ restaurant_id: id (Number) }`

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `DELETE /api/overview/:restaurantId`
Returns the `{ Restaurant }` deleted from the database.

 **URL Params**
  * `restaurantId` _(Number)_ : ID of the Restaurant to be delete

 **Success Response:**
  * **Status Code:** 200
  * **Content:** `{ Restaurant }` conforming to the following format:

   |Key              |Type    |
   |:--------------- |:------ |
   |`id`             |Number  |
   |`restaurant_id`  |Number  |
   |`street_address` |String  |
   |`cross_street`   |String  |
   |`neighborhood`   |String  |
   |`brunch_hrs`     |String  |
   |`lunch_hrs`      |String  |
   |`dinner_hrs`     |String  |
   |`food_type`      |String  |
   |`dining_style`   |String  |
   |`payment_options`|String  |
   |`chef`           |String  |
   |`website`        |String  |
   |`phone_number`   |String  |
   |`longitude`      |Number  |
   |`latitude`       |Number  |

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
<hr>