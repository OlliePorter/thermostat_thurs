require 'sinatra'
require 'sinatra/reloader'


# Sync log output to STDOUT
$stdout.sync = true


# Load the application
require_relative './app'
