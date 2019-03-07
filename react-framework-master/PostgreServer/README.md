# 17001 || BUST: OVERVIEW API v1.0

 ## <a style="color: #333333">Table of Contents</a>
* [**Restaurants.restaurant**](#restaurantsrestaurant)
    * [GET /overview/:id](#get-restaurantid)
    * [POST /overview](#post-restaurantid)
    * [PUT /overview/:id](#put-restaurantid)
    * [DELETE /overview/:id](#delete-restaurantid)
<hr>

 ## Restaurants.restaurants
### `GET /overview/:id`
Returns a `{ restaurant }` at a given restaurant id.

 **URL Params**
  * `id` _(Number)_ : ID of the restaurant that will retrieve relevant details

 **Success Response:**
  * **Status Code:** 200
  * **Content:** `{ Overview }` conforming to the following format:

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
   |`dress_code`     |String  |
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
   |`dress_code`     |String  |
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

 ### `PUT /overview/:id`
Returns the `restaurantId (number)` of the reservation edited in the database.

 **URL Params**
  * `id` _(Number)_ : ID of the reservation to update

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
   |`dress_code`     |String  |
   |`payment_options`|String  |
   |`chef`           |String  |
   |`website`        |String  |
   |`phone_number`   |String  |
   |`longitude`      |Number  |
   |`latitude`       |Number  |

 **Success Response:**
  * **Status Code:** 201
  * **Content:** `{ id: id (Number) }`

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `DELETE /overview/:id`
Returns the `{ Overview }` deleted from the database.

 **URL Params**
  * `id` _(Number)_ : ID of the Restaurant to be delete

 **Success Response:**
  * **Status Code:** 200
  * **Content:** `{ Overview }` conforming to the following format:

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
   |`dress_code`     |String  |
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