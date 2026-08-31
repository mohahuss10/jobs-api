const dns = require('dns')
dns.setServers(['8.8.8.8', '1.1.1.1'])

require('dotenv').config()        
require('express-async-errors')
const express = require('express')
const app = express()
