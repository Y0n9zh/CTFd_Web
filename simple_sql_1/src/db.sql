/*
Navicat MySQL Data Transfer

Source Server         : phpmysql
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : ctf

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2020-03-02 22:00:26
*/

SET FOREIGN_KEY_CHECKS=0;

DROP DATABASE IF EXISTS `web`;

CREATE DATABASE `web`;

USE web;

-- ----------------------------
-- Table structure for flag
-- ----------------------------
DROP TABLE IF EXISTS `flag`;
CREATE TABLE `flag` (
  `flag` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'Yongz', 'Goktech');
INSERT INTO `users` VALUES ('2', 'Haige', 'Huichangshuai');
INSERT INTO `users` VALUES ('3', 'Jiaye', 'huichangxiong');
INSERT INTO `users` VALUES ('4', 'Shajie', 'Shayi');
INSERT INTO `users` VALUES ('5', 'Yaoyao', 'Dalao');
INSERT INTO `users` VALUES ('6', 'bear', 'Iloveyou');
INSERT INTO `flag` VALUES ('FLAG');
SET FOREIGN_KEY_CHECKS=1;
