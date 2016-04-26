<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Article;

class ArticlesController extends Controller
{
  public function getArticles(){
    $article = Article::latest('created_at')->paginate(5);
    return $article;
  }

}
