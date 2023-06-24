-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 24, 2023 at 03:26 PM
-- Server version: 10.3.39-MariaDB-cll-lve
-- PHP Version: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `amazesouth_amazing`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', 'amazing12345@');

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `number_of_adults` int(100) NOT NULL,
  `childrens` int(100) NOT NULL,
  `check_in` date NOT NULL,
  `package` varchar(255) NOT NULL,
  `accomodation_type` varchar(100) NOT NULL,
  `address` varchar(500) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `name`, `number_of_adults`, `childrens`, `check_in`, `package`, `accomodation_type`, `address`, `phone`, `email`) VALUES
(6, 'Suraj kumar Kumar', 1, 1, '2023-03-29', 'Leisure Holidays package', 'Rooms', 'Hardoiya pure padain Milkipur ayodhya', '098765432', 'surajanshraj@gmail.com'),
(7, 'Suraj kumar Kumar', 1, 1, '0000-00-00', 'Student Package', 'cottages', 'Hardoiya pure padain Milkipur ayodhya', '880886345', 'surajanshraj@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `package` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `city` varchar(100) NOT NULL,
  `descript` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`id`, `name`, `email`, `address`, `mobile`, `package`, `state`, `city`, `descript`) VALUES
(15, 'Suraj kumar Kumar', 'surajanshraj@gmail.com', 'Hardoiya pure padain Milkipur ayodhya', '345678', 'Pilgrimage Package', 'Up', 'Ayodhya', '\\\\XCVFGBHJMJ'),
(16, 'bharti kumari', 'bhartikudsvd90@gmail.com', 'AMNI\r\nAMNI', '3242343242', 'Special Interest Package', 'BIHAR', 'KHAGARIA', 'sdvfbgmhm'),
(17, 'NataliaEt', 'nataliaEt@nongearts.com', 'http://lemenliper.ga/usr-45014/', '84536347861', 'Ayurvedic package', 'Czechia', 'Prague', 'Hеllоǃ\r\nРеrhapѕ my meѕѕagе іs too spеcіfiс.\r\nΒut mу older ѕiѕtеr fоund а wondеrful mаn hеrе and theу havе а grеat relatіonѕhip, but what аbout me?\r\nI am 23 уearѕ оld, Νаtalia, frоm thе Czесh Republiс, knоw Εnglіsh languаge also\r\nΑnd... better tо ѕау іt immediаtеly. Ι am biѕехual. I аm not jеalouѕ of another woman... eѕреciallу if we mаkе lоve tоgethеr.\r\nΑh yeѕ, I cook verу tаѕty! аnd Ι love nоt оn'),
(18, 'MdALmHjswG', 'callvisvetlana@list.ru', 'https://senler.ru/a/29xpm/gohx/759368335&CbSy6uEnru5', '83525995834', 'Leisure Holidays package', '', '', 'Помни о том, что ты все можешь, не останавливайся https://senler.ru/a/29xpm/gohx/759368335&mt92d7JWblc https://google.com amazesouth.com'),
(19, 'Frederick Hefner', 'frederick.hefner@gmail.com', 'Hi there\r\nDo you want to get backlinks from domains that have tons of ranking keywords?\r\n\r\nhttps://www.monkeydigital.co/semrush-backlinks/', '04.68.20.11.76', 'Student Package', 'CENTRE', 'Antibes', 'Hi there\r\nDo you want to get backlinks from domains that have tons of ranking keywords?\r\n\r\nhttps://www.monkeydigital.co/semrush-backlinks/'),
(20, 'CHkr3RKp', 'fsMp_generic_9780289f_amazesouth.com@data-backup-store.com', '', 'PTKsHned', '', 'TLd91c5v', '7s3zHq5c', ''),
(21, 'Josepheliff', 'no.reply.KennethSmith@gmail.com', 'https://www.no-site.com', '81543298791', 'Honeymoon Package', 'Nicaragua', 'Jalapa', 'Hi! amazesouth.com \r\n \r\nDid you know that it is possible to send request absolutely lawful? We present a novel and legitimate method of transmitting proposals via feedback forms. Feedback forms such as these can be spotted on lots of websites. \r\nWhen such messages are sent, no personal data is used, and messages are sent to forms specifically designed to receive and process messages and appeals. M'),
(22, 'RobertViown', 'zelatcol@gmail.com', '', '85886742777', 'Ayurvedic package', 'Poland', 'Mtskheta', 'Xin chào, tôi muốn biết giá của bạn.'),
(23, 'Xavier Duval', 'xavierduval@gmx.fr', 'https://no-site.com', '81417722526', 'Special Interest Package', 'Saudi Arabia', 'Jubail', 'Bonjour, \r\n \r\nJe vous contacte car je suis spécialisé dans la mise en place du label Qualiopi pour les entreprises de votre secteur d\'activité. \r\n \r\nEn effet, Qualiopi permet à votre entreprise de commecialiser ses prestations sous forme de formations subventionnées par l\'État. \r\n \r\nJe vous confirme la possibilité de mettre en place ce processus au sein de votre entreprise. Je souhaiterais échange'),
(24, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hello amazesouth.com Webmaster! I just found your site, quick question…\r\n\r\nMy name’s Eric, I found amazesouth.com after doing a quick search – you showed up near the top of the rankings, so whatever you’re doing for SEO, looks like it’s working well.\r\n\r\nS', '555-555-1212', 'Special Interest Package', 'NY', 'New York', 'Hello amazesouth.com Admin! I just found your site, quick question…\r\n\r\nMy name’s Eric, I found amazesouth.com after doing a quick search – you showed up near the top of the rankings, so whatever you’re doing for SEO, looks like it’s working well.\r\n\r\nSo here’s my question – what happens AFTER someone lands on your site?  Anything?\r\n\r\nResearch tells us at least 70% of the people who find your site, '),
(25, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hi amazesouth.com Admin. my name’s Eric and I just ran across your website at amazesouth.com...\r\n\r\nI found it after a quick search, so your SEO’s working out…\r\n\r\nContent looks pretty good…\r\n\r\nOne thing’s missing though…\r\n\r\nA QUICK, EASY way to connect wit', '555-555-1212', 'Honeymoon Package', 'NY', 'New York', 'To the amazesouth.com Webmaster. my name’s Eric and I just ran across your website at amazesouth.com...\r\n\r\nI found it after a quick search, so your SEO’s working out…\r\n\r\nContent looks pretty good…\r\n\r\nOne thing’s missing though…\r\n\r\nA QUICK, EASY way to connect with you NOW.\r\n\r\nBecause studies show that a web lead like me will only hang out a few seconds – 7 out of 10 disappear almost instantly, Sur'),
(26, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Dear amazesouth.com Owner! I just found your site, quick question…\r\n\r\nMy name’s Eric, I found amazesouth.com after doing a quick search – you showed up near the top of the rankings, so whatever you’re doing for SEO, looks like it’s working well.\r\n\r\nSo her', '555-555-1212', 'Honeymoon Package', 'NY', 'New York', 'To the amazesouth.com Owner. I just found your site, quick question…\r\n\r\nMy name’s Eric, I found amazesouth.com after doing a quick search – you showed up near the top of the rankings, so whatever you’re doing for SEO, looks like it’s working well.\r\n\r\nSo here’s my question – what happens AFTER someone lands on your site?  Anything?\r\n\r\nResearch tells us at least 70% of the people who find your site,'),
(27, 'RobertViown', 'zelatcol@gmail.com', '', '89234717898', 'Honeymoon Package', 'Poland', 'Mtskheta', 'Salam, qiymətinizi bilmək istədim.'),
(28, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hi amazesouth.com Webmaster! \r\n\r\nMy name is Eric and unlike a lot of emails you might get, I wanted to instead provide you with a word of encouragement – Congratulations\r\n\r\nWhat for?  \r\n\r\nPart of my job is to check out websites and the work you’ve done wi', '555-555-1212', 'Pilgrimage Package', 'NY', 'New York', 'Hi amazesouth.com Administrator! \r\n\r\nMy name is Eric and unlike a lot of emails you might get, I wanted to instead provide you with a word of encouragement – Congratulations\r\n\r\nWhat for?  \r\n\r\nPart of my job is to check out websites and the work you’ve done with amazesouth.com definitely stands out. \r\n\r\nIt’s clear you took building a website seriously and made a real investment of time and resource'),
(29, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'To the amazesouth.com Webmaster. my name’s Eric and for just a second, imagine this…\r\n\r\n- Someone does a search and winds up at amazesouth.com.\r\n\r\n- They hang out for a minute to check it out.  “I’m interested… but… maybe…”\r\n\r\n- And then they hit the back', '555-555-1212', 'Wlid Package', 'NY', 'New York', 'Hello amazesouth.com Admin! my name’s Eric and for just a second, imagine this…\r\n\r\n- Someone does a search and winds up at amazesouth.com.\r\n\r\n- They hang out for a minute to check it out.  “I’m interested… but… maybe…”\r\n\r\n- And then they hit the back button and check out the other search results instead. \r\n\r\n- Bottom line – you got an eyeball, but nothing else to show for it.\r\n\r\n- There they go.\r\n'),
(30, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hi amazesouth.com Admin.\r\n\r\nEric here with a quick thought about your website amazesouth.com...\r\n\r\nI’m on the internet a lot and I look at a lot of business websites.\r\n\r\nLike yours, many of them have great content. \r\n\r\nBut all too often, they come up shor', '555-555-1212', 'Pilgrimage Package', 'NY', 'New York', 'Hello amazesouth.com Admin.\r\n\r\nEric here with a quick thought about your website amazesouth.com...\r\n\r\nI’m on the internet a lot and I look at a lot of business websites.\r\n\r\nLike yours, many of them have great content. \r\n\r\nBut all too often, they come up short when it comes to engaging and connecting with anyone who visits.\r\n\r\nI get it – it’s hard.  Studies show 7 out of 10 people who land on a sit'),
(31, 'Katy Trilly', 'katytrilly9@gmail.com', 'Hi,\r\n\r\nWe\'d like to introduce to you our explainer video service, which we feel can benefit your site amazesouth.com.\r\n\r\nCheck out some of our existing videos here:\r\nhttps://www.youtube.com/watch?v=bWz-ELfJVEI\r\nhttps://www.youtube.com/watch?v=Y46aNG-Y3rM\r', 'Mj cmz', 'Leisure Holidays package', 'BURGENLAND', 'Zell An Der Ybbs', 'Hi,\r\n\r\nWe\'d like to introduce to you our explainer video service, which we feel can benefit your site amazesouth.com.\r\n\r\nCheck out some of our existing videos here:\r\n\r\nhttps://www.youtube.com/watch?v=zvGF7uRfH04\r\nhttps://www.youtube.com/watch?v=cZPsp217Iik\r\nhttps://www.youtube.com/watch?v=JHfnqS2zpU8\r\n\r\nAll of our videos are in a similar animated format as the above examples, and we have voice ove'),
(32, 'Eric Jones', 'eric.jones.z.mail@gmail.com', 'Hi amazesouth.com Owner!\r\n\r\nMy name’s Eric and I just found your site amazesouth.com.\r\n\r\nIt’s got a lot going for it, but here’s an idea to make it even MORE effective.\r\n\r\nWeb Visitors Into Leads – CLICK HERE http://advanceleadgeneration.com for a live de', '555-555-1212', 'Leisure Holidays package', 'NY', 'New York', 'Dear amazesouth.com Webmaster!\r\n\r\nMy name’s Eric and I just found your site amazesouth.com.\r\n\r\nIt’s got a lot going for it, but here’s an idea to make it even MORE effective.\r\n\r\nWeb Visitors Into Leads – CLICK HERE http://advanceleadgeneration.com for a live demo now.\r\n\r\nWeb Visitors Into Leads is a software widget that’s works on your site, ready to capture any visitor’s Name, Email address and P'),
(33, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hello amazesouth.com Admin!\r\n\r\nCool website!\r\n\r\nMy name’s Eric, and I just found your site - amazesouth.com - while surfing the net. You showed up at the top of the search results, so I checked you out. Looks like what you’re doing is pretty cool.\r\n \r\nBut', '555-555-1212', 'Student Package', 'NY', 'New York', 'Hi amazesouth.com Webmaster!\r\n\r\nCool website!\r\n\r\nMy name’s Eric, and I just found your site - amazesouth.com - while surfing the net. You showed up at the top of the search results, so I checked you out. Looks like what you’re doing is pretty cool.\r\n \r\nBut if you don’t mind me asking – after someone like me stumbles across amazesouth.com, what usually happens?\r\n\r\nIs your site generating leads for '),
(34, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hello amazesouth.com Administrator. this is Eric and I ran across amazesouth.com a few minutes ago.\r\n\r\nLooks great… but now what?\r\n\r\nBy that I mean, when someone like me finds your website – either through Search or just bouncing around – what happens nex', '555-555-1212', 'Special Interest Package', 'NY', 'New York', 'To the amazesouth.com Owner. this is Eric and I ran across amazesouth.com a few minutes ago.\r\n\r\nLooks great… but now what?\r\n\r\nBy that I mean, when someone like me finds your website – either through Search or just bouncing around – what happens next?  Do you get a lot of leads from your site, or at least enough to make you happy?\r\n\r\nHonestly, most business websites fall a bit short when it comes t'),
(35, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hi amazesouth.com Webmaster. my name’s Eric and for just a second, imagine this…\r\n\r\n- Someone does a search and winds up at amazesouth.com.\r\n\r\n- They hang out for a minute to check it out.  “I’m interested… but… maybe…”\r\n\r\n- And then they hit the back but', '555-555-1212', 'Teachers Package', 'NY', 'New York', 'Hello amazesouth.com Administrator. my name’s Eric and for just a second, imagine this…\r\n\r\n- Someone does a search and winds up at amazesouth.com.\r\n\r\n- They hang out for a minute to check it out.  “I’m interested… but… maybe…”\r\n\r\n- And then they hit the back button and check out the other search results instead. \r\n\r\n- Bottom line – you got an eyeball, but nothing else to show for it.\r\n\r\n- There th'),
(36, 'YunpUnago', 'fuyfiufgogo@outlook.com', 'https://xbebz.palatlaldate.com/c/da57dc555e50572d?s1=12179&s2=1471083&j1=1', '82921711761', 'Teachers Package', 'USA', 'NY', 'My pussy is not just flowing heavily, I\'m pouring all over. If you don\'t fuck her, she squirts https://xbebz.datlngllfe.net?utm_source=da57dc555e50572d&s1=12179&s2=1471083&j1=1'),
(37, 'WillardKenly', 'yasen.krasen.13+77308@mail.ru', '', '83148795484', 'Special Interest Package', 'Bermuda', 'Saint George', 'Ufieuhdidhefh wjdwdjqwidjwefhwfakj oijofqwfbvsdfjfwej ijwqiofjewuhfwedjawdhewh ouhwidwjpouweiofeiouqwruio ioqwiwuifewifjfifhw jiwfjiewhfewgiewufewio amazesouth.com'),
(38, 'Iris Weller', 'hacker@pastificiodaverri.com', 'We have hacked your website amazesouth.com and extracted your databases. This was due to the security holes you had in your your site/server which have gained us remote control of everything that was on the server. \r\n\r\nOur team is mostly interested in cus', '940-465-9965', 'Ayurvedic package', 'TX', 'Farmers Branch', 'We have hacked your website amazesouth.com and extracted your databases. This was due to the security holes you had in your your site/server which have gained us remote control of everything that was on the server. \r\n\r\nOur team is mostly interested in customer, administrative, and employee information which we have extracted through your databases once we got remote control over the server. It sti'),
(39, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hi amazesouth.com Owner.\r\n\r\nMy name’s Eric and I just found your site amazesouth.com.\r\n\r\nIt’s got a lot going for it, but here’s an idea to make it even MORE effective.\r\n\r\nWeb Visitors Into Leads – CLICK HERE http://jumboleadmagnet.com for a live demo now', '555-555-1212', 'Honeymoon Package', 'NY', 'New York', 'Dear amazesouth.com Administrator.\r\n\r\nMy name’s Eric and I just found your site amazesouth.com.\r\n\r\nIt’s got a lot going for it, but here’s an idea to make it even MORE effective.\r\n\r\nWeb Visitors Into Leads – CLICK HERE http://jumboleadmagnet.com for a live demo now.\r\n\r\nWeb Visitors Into Leads is a software widget that’s works on your site, ready to capture any visitor’s Name, Email address and Pho'),
(40, 'Gary Wilson', 'gw2920339@gmail.com', 'https://amazesouth.com', '89512628742', 'Ayurvedic package', 'United Kingdom', 'Stirling', 'Good day, \r\n \r\nI am reaching out to express my interest in a potential business opportunity that worth $26.8 Million. \r\nThis would be of a great benefit to both parties if handled well. \r\n \r\nPlease get back to me through this email: Gw455075@gmail.com \r\n \r\nThanks, \r\n \r\nGary Wilson'),
(41, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'To the amazesouth.com Webmaster.\r\n\r\nMy name’s Eric and I just came across your website - amazesouth.com - in the search results.\r\n\r\nHere’s what that means to me…\r\n\r\nYour SEO’s working.\r\n\r\nYou’re getting eyeballs – mine at least.\r\n\r\nYour content’s pretty g', '555-555-1212', 'Wlid Package', 'NY', 'New York', 'Hi amazesouth.com Webmaster!\r\n\r\nMy name’s Eric and I just came across your website - amazesouth.com - in the search results.\r\n\r\nHere’s what that means to me…\r\n\r\nYour SEO’s working.\r\n\r\nYou’re getting eyeballs – mine at least.\r\n\r\nYour content’s pretty good, wouldn’t change a thing.\r\n\r\nBUT…\r\n\r\nEyeballs don’t pay the bills.\r\n\r\nCUSTOMERS do.\r\n\r\nAnd studies show that 7 out of 10 visitors to a site like '),
(42, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hi amazesouth.com Owner.\r\n\r\nI just found your site, quick question…\r\n\r\nMy name’s Eric, I found amazesouth.com after doing a quick search – you showed up near the top of the rankings, so whatever you’re doing for SEO, looks like it’s working well.\r\n\r\nSo he', '555-555-1212', 'Teachers Package', 'NY', 'New York', 'Dear amazesouth.com Admin!\r\n\r\nI just found your site, quick question…\r\n\r\nMy name’s Eric, I found amazesouth.com after doing a quick search – you showed up near the top of the rankings, so whatever you’re doing for SEO, looks like it’s working well.\r\n\r\nSo here’s my question – what happens AFTER someone lands on your site?  Anything?\r\n\r\nResearch tells us at least 70% of the people who find your site'),
(43, 'Layne Bravo', 'layne.bravo@gmail.com', 'Hi there\r\n\r\nIf you ever need Negative SEO or a de-rank strategy, you can hire us here\r\n\r\nhttps://www.speed-seo.net/product/negative-seo-service/\r\n\r\n', '03671 19 06 91', 'Special Interest Package', 'TH', 'Saalfeld', 'Hi\r\n\r\nIf you ever need Negative SEO or a de-rank strategy, you can hire us here\r\n\r\nhttps://www.speed-seo.net/product/negative-seo-service/\r\n\r\n'),
(44, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'To the amazesouth.com Owner!\r\n\r\nMy name is Eric and I’m betting you’d like your website amazesouth.com to generate more leads.\r\n\r\nHere’s how:\r\nWeb Visitors Into Leads is a software widget that’s works on your site, ready to capture any visitor’s Name, Ema', '555-555-1212', 'Wlid Package', 'NY', 'New York', 'Hello amazesouth.com Administrator!\r\n\r\nMy name is Eric and I’m betting you’d like your website amazesouth.com to generate more leads.\r\n\r\nHere’s how:\r\nWeb Visitors Into Leads is a software widget that’s works on your site, ready to capture any visitor’s Name, Email address and Phone Number.  It signals you as soon as they say they’re interested – so that you can talk to that lead while they’re stil'),
(45, 'StevenbOm', 'johnveeken@gcom.net.au', '', '82534973657', 'Leisure Holidays package', 'Moldova', 'Chisinau', 'BOOST YOUR WEBSITE\'S REPUTATION: LET SOCIAL SIGNALS SPEAK VOLUMES https://drive-massive-traffic-to-your-website.blogspot.it/2023/05/drive-massive-traffic-to-your-website.html'),
(46, 'Marc Fourvel', 'marc.fourvel@gmail.com', 'https://amazesouth.com', '89998589658', 'Special Interest Package', 'United Kingdom', 'Stirling', 'Bonjour, \r\n \r\nVos managers n’ont pas le temps de manager et vous pensez perdre de l’argent ? \r\n \r\nNous souhaiterions vous proposer un audit gratuit vous permettant d’appliquer notre méthode pour regagner des heures précieuses et d’arrêter de perdre du cash. \r\n \r\nJe vous invite à me contacter à marc.fourvel@gmail.com pour en savoir plus. \r\n \r\nBien cordialement, \r\n \r\nMarc Fourvel \r\nConsultant en con'),
(47, 'fag', 'obmzen0a@icloud.com', '', '85775336512', 'Wlid Package', 'Nigeria', 'Kaduna', 'Hi, this is Irina. I am sending you my intimate photos as I promised. https://tinyurl.com/24tt2rz5'),
(48, 'RichardTax', 'edydhj@yahoo.com.au', '', '82265572975', 'Leisure Holidays package', 'Singapore', 'Sembawang', 'Discover the Winning Formula: Social Signals + Your Site = Online Success https://rankings-with-social-signals.blogspot.nl/2023/05/increase-your-websites-authority-and.html'),
(49, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hello amazesouth.com Owner. Cool website!\r\n\r\nMy name’s Eric, and I just found your site - amazesouth.com - while surfing the net. You showed up at the top of the search results, so I checked you out. Looks like what you’re doing is pretty cool.\r\n \r\nBut if', '555-555-1212', 'Pilgrimage Package', 'NY', 'New York', 'Dear amazesouth.com Owner. Cool website!\r\n\r\nMy name’s Eric, and I just found your site - amazesouth.com - while surfing the net. You showed up at the top of the search results, so I checked you out. Looks like what you’re doing is pretty cool.\r\n \r\nBut if you don’t mind me asking – after someone like me stumbles across amazesouth.com, what usually happens?\r\n\r\nIs your site generating leads for your '),
(50, 'fag', 'pzgt75c4@icloud.com', '', '84896594174', 'Honeymoon Package', 'Nigeria', 'Kaduna', 'Hi, this is Anna. I am sending you my intimate photos as I promised. https://tinyurl.com/2c8dxy79'),
(51, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hi amazesouth.com Owner! I just found your site, quick question…\r\n\r\nMy name’s Eric, I found amazesouth.com after doing a quick search – you showed up near the top of the rankings, so whatever you’re doing for SEO, looks like it’s working well.\r\n\r\nSo here’', '555-555-1212', 'Wlid Package', 'NY', 'New York', 'Dear amazesouth.com Admin. I just found your site, quick question…\r\n\r\nMy name’s Eric, I found amazesouth.com after doing a quick search – you showed up near the top of the rankings, so whatever you’re doing for SEO, looks like it’s working well.\r\n\r\nSo here’s my question – what happens AFTER someone lands on your site?  Anything?\r\n\r\nResearch tells us at least 70% of the people who find your site, a'),
(52, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'To the amazesouth.com Administrator. \r\n\r\nMy name is Eric and unlike a lot of emails you might get, I wanted to instead provide you with a word of encouragement – Congratulations\r\n\r\nWhat for?  \r\n\r\nPart of my job is to check out websites and the work you’ve', '555-555-1212', 'Pilgrimage Package', 'NY', 'New York', 'Dear amazesouth.com Administrator! \r\n\r\nMy name is Eric and unlike a lot of emails you might get, I wanted to instead provide you with a word of encouragement – Congratulations\r\n\r\nWhat for?  \r\n\r\nPart of my job is to check out websites and the work you’ve done with amazesouth.com definitely stands out. \r\n\r\nIt’s clear you took building a website seriously and made a real investment of time and resour'),
(53, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'To the amazesouth.com Admin. my name’s Eric and I just ran across your website at amazesouth.com...\r\n\r\nI found it after a quick search, so your SEO’s working out…\r\n\r\nContent looks pretty good…\r\n\r\nOne thing’s missing though…\r\n\r\nA QUICK, EASY way to connect', '555-555-1212', 'Special Interest Package', 'NY', 'New York', 'Dear amazesouth.com Webmaster. my name’s Eric and I just ran across your website at amazesouth.com...\r\n\r\nI found it after a quick search, so your SEO’s working out…\r\n\r\nContent looks pretty good…\r\n\r\nOne thing’s missing though…\r\n\r\nA QUICK, EASY way to connect with you NOW.\r\n\r\nBecause studies show that a web lead like me will only hang out a few seconds – 7 out of 10 disappear almost instantly, Surf '),
(54, 'Megan Atkinson', 'meganatkinson352@gmail.com', 'Hi there,\r\n\r\nWe run an Instagram growth service, which increases your number of followers both safely and practically. \r\n\r\n- Guaranteed: We guarantee to gain you 400-1200+ followers per month.\r\n- Real, human followers: People follow you because they are i', '0317 4121476', 'Pilgrimage Package', 'BA', 'Minervino Murge', 'Hi there,\r\n\r\nWe run an Instagram growth service, which increases your number of followers both safely and practically. \r\n\r\n- We guarantee to gain you 400-1000+ followers per month.\r\n- People follow you because they are interested in you, increasing likes, comments and interaction.\r\n- All actions are made manually by our team. We do not use any \'bots\'.\r\n\r\nThe price is just $60 (USD) per month, and '),
(55, 'ZEMTEFOTS', 'ZEMTEFOTS@lmaill.xyz', 'http://buyciali.cfd', '84257558554', 'Special Interest Package', 'United States', 'New York', 'Retuximab MABALL, HETRO, 500 100 <a href=https://buyciali.cfd>buy cialis pills</a>'),
(56, 'Stanleyror', 'allbisecomm@csr.com.au', '', '84753185396', 'Special Interest Package', 'Sweden', 'Boden', 'MULTIPLY YOUR INVESTMENTS WITH THESE 10 CRYPTO GEMS - 20,000% GROWTH AHEAD https://vae.me/Fk34'),
(57, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hello amazesouth.com Webmaster.\r\n\r\nMy name’s Eric and I just found your site amazesouth.com.\r\n\r\nIt’s got a lot going for it, but here’s an idea to make it even MORE effective.\r\n\r\nWeb Visitors Into Leads – CLICK HERE https://advanceleadgeneration.com for a', '555-555-1212', 'Honeymoon Package', 'NY', 'New York', 'Dear amazesouth.com Owner!\r\n\r\nMy name’s Eric and I just found your site amazesouth.com.\r\n\r\nIt’s got a lot going for it, but here’s an idea to make it even MORE effective.\r\n\r\nWeb Visitors Into Leads – CLICK HERE https://advanceleadgeneration.com for a live demo now.\r\n\r\nWeb Visitors Into Leads is a software widget that’s works on your site, ready to capture any visitor’s Name, Email address and Phon'),
(58, 'Y9PRFnKs', '1Ugw_generic_9780289f_amazesouth.com@data-backup-store.com', '', 'qGBXZCuN', '', 'dw432nrP', 'kX21E0Am', ''),
(59, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'To the amazesouth.com Administrator!\r\n\r\nMy name’s Eric and I just ran across your website at amazesouth.com...\r\n\r\nI found it after a quick search, so your SEO’s working out…\r\n\r\nContent looks pretty good…\r\n\r\nOne thing’s missing though…\r\n\r\nA QUICK, EASY way', '555-555-1212', 'Honeymoon Package', 'NY', 'New York', 'Dear amazesouth.com Admin.\r\n\r\nMy name’s Eric and I just ran across your website at amazesouth.com...\r\n\r\nI found it after a quick search, so your SEO’s working out…\r\n\r\nContent looks pretty good…\r\n\r\nOne thing’s missing though…\r\n\r\nA QUICK, EASY way to connect with you NOW.\r\n\r\nBecause studies show that a web lead like me will only hang out a few seconds – 7 out of 10 disappear almost instantly, Surf S'),
(60, 'Diane Swearingen', 'diane.swearingen@gmail.com', 'Submit your website to our free business directory and start getting more traffic. Check out: http://submityoursitefree.12com.xyz/', '(03) 5300 4281', 'Ayurvedic package', 'VIC', 'Delegate River East', 'Get free traffic for your site, submit http://amazesouth.com/contact.html here and we\'ll post it to over 35 classified ad sites now! Visit: http://submityoursitefree.12com.xyz/'),
(61, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hi amazesouth.com Admin. this is Eric and I ran across amazesouth.com a few minutes ago.\r\n\r\nLooks great… but now what?\r\n\r\nBy that I mean, when someone like me finds your website – either through Search or just bouncing around – what happens next?  Do you ', '555-555-1212', 'Wlid Package', 'NY', 'New York', 'To the amazesouth.com Webmaster. this is Eric and I ran across amazesouth.com a few minutes ago.\r\n\r\nLooks great… but now what?\r\n\r\nBy that I mean, when someone like me finds your website – either through Search or just bouncing around – what happens next?  Do you get a lot of leads from your site, or at least enough to make you happy?\r\n\r\nHonestly, most business websites fall a bit short when it com'),
(62, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'To the amazesouth.com Webmaster! this is Eric and I ran across amazesouth.com a few minutes ago.\r\n\r\nLooks great… but now what?\r\n\r\nBy that I mean, when someone like me finds your website – either through Search or just bouncing around – what happens next? ', '555-555-1212', 'Honeymoon Package', 'NY', 'New York', 'Hi amazesouth.com Admin. this is Eric and I ran across amazesouth.com a few minutes ago.\r\n\r\nLooks great… but now what?\r\n\r\nBy that I mean, when someone like me finds your website – either through Search or just bouncing around – what happens next?  Do you get a lot of leads from your site, or at least enough to make you happy?\r\n\r\nHonestly, most business websites fall a bit short when it comes to ge'),
(63, 'Steve Watson', 'explainervideos382@gmail.com', 'Hi,\r\n\r\nWe\'d like to introduce to you our explainer video service, which we feel can benefit your site amazesouth.com.\r\n\r\nCheck out some of our existing videos here:\r\nhttps://www.youtube.com/watch?v=bWz-ELfJVEI\r\nhttps://www.youtube.com/watch?v=Y46aNG-Y3rM\r', '06-83776067', 'Special Interest Package', 'London', 'Barnes', 'Hi,\r\n\r\nWe\'d like to introduce to you our explainer video service, which we feel can benefit your site amazesouth.com.\r\n\r\nOur clients utilize our videos to enhance their product, service, event promotion, or provide clear explanations for tutorials, software, or applications.\r\n\r\nCheck out some of our existing videos here:\r\n\r\nhttps://www.youtube.com/watch?v=zvGF7uRfH04\r\nhttps://www.youtube.com/watch'),
(64, 'Arthur Letallec', 'arthurletallec@outlook.fr', 'https://no-site.com', '89477463887', 'Ayurvedic package', 'Germany', 'Freising', 'Bonjour, \r\n \r\nJe me permets de vous contacter, car etant specialise dans l’optimisation de la gestion des fonds des PME entre autres, je souhaiterais vous faire beneficier d’un audit gratuit afin de voir ensemble comment optimiser au mieux vos excedents de tresorerie. \r\n \r\nDiscutons-en dans les prochains jours ? Vous pouvez me contacter a arthurletallec@outlook.fr \r\n \r\nBonne journee.'),
(65, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'To the amazesouth.com Owner. Eric here with a quick thought about your website amazesouth.com...\r\n\r\nI’m on the internet a lot and I look at a lot of business websites.\r\n\r\nLike yours, many of them have great content. \r\n\r\nBut all too often, they come up sho', '555-555-1212', 'Honeymoon Package', 'NY', 'New York', 'Hello amazesouth.com Owner! Eric here with a quick thought about your website amazesouth.com...\r\n\r\nI’m on the internet a lot and I look at a lot of business websites.\r\n\r\nLike yours, many of them have great content. \r\n\r\nBut all too often, they come up short when it comes to engaging and connecting with anyone who visits.\r\n\r\nI get it – it’s hard.  Studies show 7 out of 10 people who land on a site, '),
(66, 'Mariakn', 'mariakn@multiplebtc.com', 'http://inasrenrue.tk/idm-54632/', '82411682511', 'Special Interest Package', 'Romania', 'Bucharest', 'Ηеllо аll, guysǃ I know, mу mеssagе may bе too sрecіfіc,\r\nΒut my sistеr fоund nicе man hеrе аnd thеу mаrrіed, ѕо hоw аbоut me?! :)\r\nΙ аm 25 yеarѕ old, Мarіа, from Romania, I know Englіsh and Germаn languagеs alѕо\r\nАnd... I hаvе ѕpеcifiс disеasе, nаmed nymphomanіа. Who knоw whаt iѕ thіs, саn undеrstand mе (bеtter to ѕay іt immedіatelу)\r\nAh yeѕ, Ι cооk very tаstуǃ аnd Ι lоvе nоt оnly coоk ;))\r\nΙm rе'),
(67, 'Georgina Haynes', 'georginahaynes95@gmail.com', 'Hi,\r\n\r\nWe\'d like to introduce to you our explainer video service, which we feel can benefit your site amazesouth.com.\r\n\r\nCheck out some of our existing videos here:\r\nhttps://www.youtube.com/watch?v=bWz-ELfJVEI\r\nhttps://www.youtube.com/watch?v=Y46aNG-Y3rM\r', '830-964-6670', 'Teachers Package', 'TX', 'Sattler', 'Hi,\r\n\r\nWe\'d like to introduce to you our explainer video service, which we feel can benefit your site amazesouth.com.\r\n\r\nCheck out some of our existing videos here:\r\nhttps://www.youtube.com/watch?v=bWz-ELfJVEI\r\nhttps://www.youtube.com/watch?v=Y46aNG-Y3rM\r\nhttps://www.youtube.com/watch?v=hJCFX1AjHKk\r\n\r\nAll of our videos are in a similar animated format as the above examples, and we have voice over '),
(68, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'To the amazesouth.com Owner.\r\n\r\nThis is Eric and I ran across amazesouth.com a few minutes ago.\r\n\r\nLooks great… but now what?\r\n\r\nBy that I mean, when someone like me finds your website – either through Search or just bouncing around – what happens next?  ', '555-555-1212', 'Teachers Package', 'NY', 'New York', 'Hi amazesouth.com Admin.\r\n\r\nThis is Eric and I ran across amazesouth.com a few minutes ago.\r\n\r\nLooks great… but now what?\r\n\r\nBy that I mean, when someone like me finds your website – either through Search or just bouncing around – what happens next?  Do you get a lot of leads from your site, or at least enough to make you happy?\r\n\r\nHonestly, most business websites fall a bit short when it comes to'),
(69, 'RobertViown', 'zelatcol@gmail.com', '', '89219948231', 'Student Package', 'United kingdom', 'Mtskheta', 'Hi, I wanted to know your price.'),
(70, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Dear amazesouth.com Owner.\r\n\r\nCool website!\r\n\r\nMy name’s Eric, and I just found your site - amazesouth.com - while surfing the net. You showed up at the top of the search results, so I checked you out. Looks like what you’re doing is pretty cool.\r\n \r\nBut ', '555-555-1212', 'Pilgrimage Package', 'NY', 'New York', 'Hi amazesouth.com Admin!\r\n\r\nCool website!\r\n\r\nMy name’s Eric, and I just found your site - amazesouth.com - while surfing the net. You showed up at the top of the search results, so I checked you out. Looks like what you’re doing is pretty cool.\r\n \r\nBut if you don’t mind me asking – after someone like me stumbles across amazesouth.com, what usually happens?\r\n\r\nIs your site generating leads for your'),
(71, 'Valentina Hermanson', 'hermanson.valentina@hotmail.com', 'Hi,\r\n\r\nAre you looking for a way to generate more leads and sales for your business? I have a solution for you.\r\n\r\nThis new AI-powered platform that makes it easy to create and track professional ads and social media content. With this REVOLUTIONARY Syste', '636-530-3457', 'Teachers Package', 'MO', 'Chesterfield', 'Hi,\r\n\r\nAre you looking for a way to generate more leads and sales for your business? I have a solution for you.\r\n\r\nThis new AI-powered platform that makes it easy to create and track professional ads and social media content. With this REVOLUTIONARY System, you\'ll be able to reach a targeted audience, track your advertising performance, and optimize your campaigns for better results.\r\n\r\nDon\'t miss'),
(72, 'Thomasrak', 'nicolas.ray@unige.ch', '', '85995464514', 'Teachers Package', 'Sweden', 'Boden', 'Skyrocket Your Website\'s Visibility with 3104 Safe Links from Google—for FREE http://topsafetrust.slushshed.xyz/webtoptrust'),
(73, 'Rosaline', 'rosaline@whish.medicopostura.com', 'Hello there \r\n\r\nLooking to improve your posture and live a healthier life? Our Medico Postura™ Body Posture Corrector is here to help!\r\n\r\nExperience instant posture improvement with Medico Postura™. This easy-to-use device can be worn anywhere, anytime – ', '476 4383', 'Special Interest Package', 'NA', 'Drangsnes', 'Hello \r\n\r\nLooking to improve your posture and live a healthier life? Our Medico Postura™ Body Posture Corrector is here to help!\r\n\r\nExperience instant posture improvement with Medico Postura™. This easy-to-use device can be worn anywhere, anytime – at home, work, or even while you sleep.\r\n\r\nMade from lightweight, breathable fabric, it ensures comfort all day long.\r\n\r\nGrab it today at a fantastic 6'),
(74, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hi amazesouth.com Admin. my name is Eric and I’m betting you’d like your website amazesouth.com to generate more leads.\r\n\r\nHere’s how:\r\nWeb Visitors Into Leads is a software widget that’s works on your site, ready to capture any visitor’s Name, Email addr', '555-555-1212', 'Pilgrimage Package', 'NY', 'New York', 'Hello amazesouth.com Webmaster. my name is Eric and I’m betting you’d like your website amazesouth.com to generate more leads.\r\n\r\nHere’s how:\r\nWeb Visitors Into Leads is a software widget that’s works on your site, ready to capture any visitor’s Name, Email address and Phone Number.  It signals you as soon as they say they’re interested – so that you can talk to that lead while they’re still there'),
(75, 'TOyjJUziOX', 'callvisvetlana@list.ru', 'https://senler.ru/a/2d0za/5job/534556554-57vcoAJhoDZ', '85855145944', 'Teachers Package', '', '', 'Сделай то что нужно и все ок https://senler.ru/a/2d0za/5job/534556554-MnLdd7kUA97 https://mail.ru amazesouth.com'),
(76, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hi amazesouth.com Administrator!\r\n\r\nMy name’s Eric and I just came across your website - amazesouth.com - in the search results.\r\n\r\nHere’s what that means to me…\r\n\r\nYour SEO’s working.\r\n\r\nYou’re getting eyeballs – mine at least.\r\n\r\nYour content’s pretty g', '555-555-1212', 'Student Package', 'NY', 'New York', 'Hello amazesouth.com Admin!\r\n\r\nMy name’s Eric and I just came across your website - amazesouth.com - in the search results.\r\n\r\nHere’s what that means to me…\r\n\r\nYour SEO’s working.\r\n\r\nYou’re getting eyeballs – mine at least.\r\n\r\nYour content’s pretty good, wouldn’t change a thing.\r\n\r\nBUT…\r\n\r\nEyeballs don’t pay the bills.\r\n\r\nCUSTOMERS do.\r\n\r\nAnd studies show that 7 out of 10 visitors to a site like a'),
(77, 'Stephenric', 'chris.charles10@yahoo.com', '', '88565225248', 'Special Interest Package', 'Sweden', 'Boden', 'Say goodbye to financial stress: 10,000 EUR monthly on autopilot with crypto http://1minkryptoeuro-4879362.janeshomenews.xyz/anwendung-8735594'),
(78, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hi amazesouth.com Owner. my name’s Eric and I just ran across your website at amazesouth.com...\r\n\r\nI found it after a quick search, so your SEO’s working out…\r\n\r\nContent looks pretty good…\r\n\r\nOne thing’s missing though…\r\n\r\nA QUICK, EASY way to connect wit', '555-555-1212', 'Teachers Package', 'NY', 'New York', 'Hi amazesouth.com Webmaster! my name’s Eric and I just ran across your website at amazesouth.com...\r\n\r\nI found it after a quick search, so your SEO’s working out…\r\n\r\nContent looks pretty good…\r\n\r\nOne thing’s missing though…\r\n\r\nA QUICK, EASY way to connect with you NOW.\r\n\r\nBecause studies show that a web lead like me will only hang out a few seconds – 7 out of 10 disappear almost instantly, Surf Su'),
(79, 'Jarrod Sasaki', 'sasaki.jarrod@gmail.com', 'Hi,\r\n\r\nTake back your time—increase conversions by an average of 14x.\r\n \r\nThat’s what This AI can do for your Business or agency.\r\n  \r\nThis Revolutionary AI is a highly trained Artificial Intelligence that:\r\n \r\n- Generates your creatives\r\n- Uses proven de', '0676 759 48 36', 'Honeymoon Package', 'STYRIA', 'Magland', 'Hi,\r\n\r\nTake back your time—increase conversions by an average of 14x.\r\n \r\nThat’s what This AI can do for your Business or agency.\r\n  \r\nThis Revolutionary AI is a highly trained Artificial Intelligence that:\r\n \r\n- Generates your creatives\r\n- Uses proven design traits\r\n- Makes your life easier\r\n \r\nPlus: New Users get $500 worth of Google Ad Credits for FREE.\r\n \r\nSign up today. Cancel anytime.\r\n \r\nTr'),
(80, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hi amazesouth.com Webmaster.\r\n\r\nEric here with a quick thought about your website amazesouth.com...\r\n\r\nI’m on the internet a lot and I look at a lot of business websites.\r\n\r\nLike yours, many of them have great content. \r\n\r\nBut all too often, they come up ', '555-555-1212', 'Pilgrimage Package', 'NY', 'New York', 'Dear amazesouth.com Administrator.\r\n\r\nEric here with a quick thought about your website amazesouth.com...\r\n\r\nI’m on the internet a lot and I look at a lot of business websites.\r\n\r\nLike yours, many of them have great content. \r\n\r\nBut all too often, they come up short when it comes to engaging and connecting with anyone who visits.\r\n\r\nI get it – it’s hard.  Studies show 7 out of 10 people who land o'),
(81, 'Anne McGarry', 'makemybusinessgreatagain@gmail.com', 'It is with sad regret we are shutting down.\r\n\r\nWe have made all our leads available for a one time fee on DataList2023.com\r\n\r\nRegards,\r\nAnne', '(41) 8048-7649', 'Pilgrimage Package', 'PR', 'Curitiba', 'It is with sad regret we are shutting down.\r\n\r\nWe have made all our leads available for a one time fee on DataList2023.com\r\n\r\nRegards,\r\nAnne'),
(82, 'CharlesBeary', 'investissement_direct_promoteur@proton.me', 'https://no-site.com', '84471359226', 'Ayurvedic package', 'Germany', 'Freising', 'Bonjour, \r\nSi vous avez deja ete contacte pour investir dans le neuf par de la publicite : j’espere que vous n’avez pas achete car les prix sont augmentes de 10 a 20% (frais d’agences etc) \r\nJe suis un ancien vendeur de ces reseaux, et je vous mets en relation en direct avec des promoteurs immobiliers francais : \r\nVous economisez de 5 a 30% sur les prix (mon service est 100% gratuit pour vous) \r\nP'),
(83, 'Timothylew', 'secureformfr@protonmail.com', 'https://www.no-site.com', '81178992451', 'Ayurvedic package', 'United Arab Emirates', 'Garhoud', 'Vous avez un site et souhaitez améliorer la visibilité de votre activité ou bien tout simplement vous former dans un domaine bien précis : \r\nProfitez des aides pour vous enrichir et acquérir de nouvelles compétences \r\nExemple de formations en distanciel : \r\nFormations digitales, Formation transition numérique, PAO, Formations commerciales, Formation community Manager … \r\nFaites votre demande sur h'),
(84, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hi amazesouth.com Webmaster.\r\n\r\nCool website!\r\n\r\nMy name’s Eric, and I just found your site - amazesouth.com - while surfing the net. You showed up at the top of the search results, so I checked you out. Looks like what you’re doing is pretty cool.\r\n \r\nBu', '555-555-1212', 'Leisure Holidays package', 'NY', 'New York', 'Dear amazesouth.com Webmaster.\r\n\r\nCool website!\r\n\r\nMy name’s Eric, and I just found your site - amazesouth.com - while surfing the net. You showed up at the top of the search results, so I checked you out. Looks like what you’re doing is pretty cool.\r\n \r\nBut if you don’t mind me asking – after someone like me stumbles across amazesouth.com, what usually happens?\r\n\r\nIs your site generating leads fo'),
(85, 'HRM Bah Mbi', 'hrmba445@gmail.com', 'https://www.no-site.com', '84492298232', 'Leisure Holidays package', 'Greece', 'Kalamaria', 'Attn. Director, \r\n \r\nWe are interested in your products. Please contact us with your product details and price list if your company can handle a bulk supply of your products to Cameroon. \r\nPlease send your reply to hrh_bah_mbi@oiedcadmin.org \r\n \r\nHRM Bah Mbi'),
(86, 'Eric Jones', 'ericjonesmyemail@gmail.com', 'Hello amazesouth.com Owner. \r\n\r\nEric here with a quick thought about your website amazesouth.com...\r\n\r\nI’m on the internet a lot and I look at a lot of business websites.\r\n\r\nLike yours, many of them have great content. \r\n\r\nBut all too often, they come up ', '555-555-1212', 'Honeymoon Package', 'NY', 'New York', 'Dear amazesouth.com Webmaster! \r\n\r\nEric here with a quick thought about your website amazesouth.com...\r\n\r\nI’m on the internet a lot and I look at a lot of business websites.\r\n\r\nLike yours, many of them have great content. \r\n\r\nBut all too often, they come up short when it comes to engaging and connecting with anyone who visits.\r\n\r\nI get it – it’s hard.  Studies show 7 out of 10 people who land on a');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `event_cotegory` varchar(50) NOT NULL,
  `desciption` varchar(500) NOT NULL,
  `img_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `event_cotegory`, `desciption`, `img_url`) VALUES
(42, 'social-works', '\\xcdfghjk', 'living-room-2569325_19201.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `hotel`
--

CREATE TABLE `hotel` (
  `id` int(11) NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `hotel_name` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hotel`
--

INSERT INTO `hotel` (`id`, `img_url`, `hotel_name`) VALUES
(35, 'honeymoon1.jpg', 'HONEYMOON HOTELS/RESORT'),
(36, 'luxuryhotel.jpg', 'LUXURY HOTELS/RESORT'),
(37, 'leisurehotel.jpg', 'LEISURE HOTELS/RESORT'),
(38, 'hotelimg.jpg', 'HOTELS/RESORT'),
(39, 'honeymoon2.jpg', 'HONEYMOON HOTELS/RESORT'),
(40, 'cochin.jpg', 'HOUSE BOAT KERALA');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `id` int(11) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `vehicle_name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`id`, `img_url`, `vehicle_name`) VALUES
(7, 'etios-removebg-preview1.png', 'DELUX '),
(8, 'Innova-removebg-preview1.png', 'FAMILY VEHICLES'),
(9, 'luxury2-removebg-preview1.png', 'LUXURY CAR'),
(10, 'comforts-removebg-preview_(2)1.png', 'COMFORT CAR'),
(11, 'economy-removebg-preview1.png', 'ECONOMY CAR'),
(12, 'coach-removebg-preview.png', 'MINI COACH AND COACHES');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `hotel`
--
ALTER TABLE `hotel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
