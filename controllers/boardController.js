const express = require('express');

module.exports = {
  home: (req, res) => {
  	return res.send('home');
  }, search: (req, res) => {
  	return res.send('search');
  }, write: (req, res) => {
  	return res.send('write');
  }, editBoard: (req, res) => {
  	return res.send('edit');
  }, deleteBoard: (req, res) => {
  	return res.send('delete');
  }, seeBoard: (req, res) => {
  	return res.send('see');
  }
};
