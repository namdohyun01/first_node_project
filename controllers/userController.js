const express = require('express');

module.exports = {
  join: (req, res) => {
    return res.send('join');
  }, login: (req, rees) => {
    return res.send('login');
  }, seeUser: (req, res) => {
    return res.send('see');
  }, editUser: (req, res) => {
    return res.send('edit');
  }, deleteUser: (req, res) => {
    return res.send('delete');
  }
};
