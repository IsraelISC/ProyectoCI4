<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'CineUbam::index');
$routes->post('agregarPelicula', 'CineUbam::agregarPelicula');
$routes->post('listPeliculas', 'CineUbam::listPeliculas');
$routes->post('showSelect', 'CineUbam::showSelect');
$routes->post('eliminarPelicula', 'CineUbam::eliminarPelicula');

