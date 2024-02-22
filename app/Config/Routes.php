<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'CineUbam::index');
$routes->post('agregarPelicula', 'CineUbam::agregarPelicula');