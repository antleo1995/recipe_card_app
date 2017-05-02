[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# recipe_card_app
Planning docs: http://i.imgur.com/BltfEyZ.jpg

## Development process

This project was meant to be as simple as possible. I kept scope to just 2 tables
with the intent to break out to more if time allowed- it did not.

Currently a user can log in, create a recipe, view all recipes they created,
edit a recipe and delete a recipe.

In future iterations it is planned to show all recipes from all users and allow
for a recipe to be searched by name.

## Difficulties

Getting the recipes to show in a format that looked like I wanted proved more
difficult than I had hoped. Ideally the site would allow a user to input a list
of ingredients that was comma delimited and handlebars would parse this out into
a list of <li> tagged ingredients. I was not able to figure out how to make a
handlbars helper in the scope of this project.

## To do list

More talbes would be needed to make this work better. Specifically a join table
between recipes and ingredients. Once this is implemented the handlbars helper
would likely not be needed as I could iterate a list of ingredients from a server

Yet to add front end data validation - error handling is mostly there.

## Prodcuction info

Production URL: https://antleo1995.github.io/recipe_card_app/
Repo: https://github.com/antleo1995/recipe_card_app

## Production info for API

Production URL: https://recipe-card-backend.herokuapp.com/
Repo: https://github.com/antleo1995/recipe_card_app_api

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
