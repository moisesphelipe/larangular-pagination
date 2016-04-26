# larangular-pagination
This is a simple pagination with Laravel and Angular. You can see the [demo here] (http://pagination-angular-laravel.esy.es/#/)

##Installation

### npm

```shell
npm install larangular-pagination
```

You cand download all the files in zip or clone this repository
```
    git clone https://github.com/moisesphelipe/larangular-pagination.git
```
You can also have an app like in the demo just changing the branch to Laravel-Example

##Configuration
If you are using Laravel-Example provider in the branch, the only one thing that you need to do is, change the `.env` file configuration for your database settings.

In order to use this in another project, you need to include the `pagination.css` file in your project and also the `pagination.directive.js` | `pagination.html`.

###Setting up the pagination
You gotta have in your request  a params property to specify the page you want to load
![example5](https://cloud.githubusercontent.com/assets/18651154/14802753/b7f484b2-0b29-11e6-8f4d-07b53fa9790e.png)


Now it's Laravel time. Fortunately Laravel makes it easy. What you need to do is specify how many articles or whatever you want to, per page, like so

![example3](https://cloud.githubusercontent.com/assets/18651154/14802473/6520a9c0-0b27-11e6-810b-63230ca1c83e.png)

and then grab it in your Angular controller. Everything that you need here is the currentPage and the lastPage, you can remove all the other stuff if you want to.
![example4](https://cloud.githubusercontent.com/assets/18651154/14802502/a18b5d56-0b27-11e6-9516-0db948da6447.png)

You can also limit how many page to show in the list, by default it is 9
![example6](https://cloud.githubusercontent.com/assets/18651154/14805581/8da3e76a-0b43-11e6-9429-618a487212b7.png)

If you are using Angular material you can chage this value in according to user's screen
![example7](https://cloud.githubusercontent.com/assets/18651154/14805641/1882a650-0b44-11e6-96be-89b42dd84a93.png)

###Using in your app

```
    <la-pagination ng-hide="!articles.length" page-attr="{{pageAttr}}"> 	</la-pagination>
```
## DEMO'S SCREENSHOT
![example1](https://cloud.githubusercontent.com/assets/18651154/14802093/f8a729ec-0b24-11e6-87dc-aa23f3f21d25.png)

![example2](https://cloud.githubusercontent.com/assets/18651154/14802117/2029c8da-0b25-11e6-86d0-4739b2cb32b0.png)
