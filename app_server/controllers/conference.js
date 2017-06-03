<<<<<<< HEAD
/* GET home page */
module.exports.homepage = function(req, res) {
=======
//Render function to render the homepage
module.exports.homepageRender = function(req, res) {
>>>>>>> task-674
    res.render('homepage', { 
      title: 'Welcome to FLACADA',
      gettingstarted: {
        title: 'Getting Started',
        bylaws: "http://www.flacada.org/wp-content/uploads/2016/01/FLACADA-Constitution-and-Bylaws-11-9-15.pdf",
        membership: "http://www.flacada.org/membership/"
      },
      socialinks:{
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://www.twitter.com/"
      },
      sidebar: "Florida Academic Advising Association (FLACADA) is an organization of professionals from higher education institutions concerned with the personal and academic advising needs of students in Florida. The primary goals of FLACADA are to adhere to the NACADA core values of advising."
    });
};

<<<<<<< HEAD


=======
//Render function to render the conference page
module.exports.conferenceRender = function(req, res) {
    res.render('conference', {
      title: 'Conference',
        conference: {
            exhibitors: '/exhibitors/',
            sponsors: '/sponsors/'
        }
    })
};

//Render function to render the exhibitors page
module.exports.exhibitorsRender = function(req, res) {
  res.render('exhibitors', {
      title: 'Exhibitors',
      exhibitorsList:[{
          nameOf: 'Avis',
          imageOf: "/public/images/avis.png",
          website: "https://www.avis.com/en/home",
          description: 'Avis is an American car rental company headquartered in Parsippany-Troy Hills, New Jersey, United States. Avis, Budget Rent a Car and Budget Truck Rental are all units of Avis Budget Group.'
      },{
          nameOf: 'CNBC',
          imageOf: "/public/images/cnbc.png",
          website: "http://www.cnbc.com/",
          description: 'CNBC is an award winning and nationally recognized American basic cable, internet and satellite business news television channel that is owned by NBCUniversal News Group, a division of NBCUniversal, owned by Comcast. Headquartered in Englewood Cliffs, New Jersey, the network primarily carries business day coverage of U.S. and international financial markets; following the end of the business day and on non-trading days, CNBC primarily carries financial and business-themed documentaries and reality shows. '
      },{
          nameOf: 'Jaquet-Droz',
          imageOf: "/public/images/jd.png",
          website: "http://www.jaquet-droz.com/",
          description: 'Pierre Jaquet-Droz was a Swiss-born watchmaker of the late eighteenth century. He lived in Paris, London, and Geneva, where he designed and built animated dolls, or automata, to help his firm sell watches and mechanical birds.'
      },{
          nameOf: 'NASDAQ',
          imageOf: "/public/images/nasdaq.png",
          website: "http://www.nasdaq.com/",
          description: 'The Nasdaq Stock Market is an American stock exchange. It is the second-largest exchange in the world by market capitalization, behind only the New York Stock Exchange.'
      },{
          nameOf: 'Shell',
          imageOf: "/public/images/shell.png",
          website: "http://www.shell.com/",
          description: 'Royal Dutch Shell plc, commonly known as Shell, is a British–Dutch multinational oil and gas company headquartered in the Netherlands and incorporated in the United Kingdom.'
      },{
          nameOf: 'Microsoft',
          imageOf: '/public/images/windows.png',
          website: "https://www.microsoft.com/en-us/",
          description: 'Microsoft Corporation is an American multinational technology company headquartered in Redmond, Washington, that develops, manufactures, licenses, supports and sells computer software, consumer electronics and personal computers and services.'
      },{
          nameOf: 'Xerox',
          imageOf: "/public/images/xerox.png",
          website: "https://www.xerox.com/?CMP=PPC-CORPUS&HBX_PK=xerox&HBX_OU=50&ADGRP=brand",
          description: 'Xerox Corporation is an American global corporation that sells document solutions and services, and document technology products in more than 160 countries.'
      }]
  })
};

//Render function to render the exhibitors-info page
module.exports.exhibitorsInfoRender = function (req, res) {
    res.render('exhibitors-info', {
      title: 'Exhibitors Details',
        exhibitorsList:[{
            nameOf: 'Avis',
            imageOf: "/public/images/avis.png",
            website: "https://www.avis.com/en/home",
            description: 'Avis is an American car rental company headquartered in Parsippany-Troy Hills, New Jersey, United States. Avis, Budget Rent a Car and Budget Truck Rental are all units of Avis Budget Group.'
        },{
            nameOf: 'CNBC',
            imageOf: "/public/images/cnbc.png",
            website: "http://www.cnbc.ctom/",
            description: 'CNBC is an award winning and nationally recognized American basic cable, internet and satellite business news television channel that is owned by NBCUniversal News Group, a division of NBCUniversal, owned by Comcast. Headquartered in Englewood Cliffs, New Jersey, the network primarily carries business day coverage of U.S. and international financial markets; following the end of the business day and on non-trading days, CNBC primarily carries financial and business-themed documentaries and reality shows. '
        },{
            nameOf: 'Jaquet-Droz',
            imageOf: "/public/images/jd.png",
            website: "http://www.jaquet-droz.com/",
            description: 'Pierre Jaquet-Droz was a Swiss-born watchmaker of the late eighteenth century. He lived in Paris, London, and Geneva, where he designed and built animated dolls, or automata, to help his firm sell watches and mechanical birds.'
        },{
            nameOf: 'NASDAQ',
            imageOf: "/public/images/nasdaq.png",
            website: "http://www.nasdaq.com/",
            description: 'The Nasdaq Stock Market is an American stock exchange. It is the second-largest exchange in the world by market capitalization, behind only the New York Stock Exchange.'
        },{
            nameOf: 'Shell',
            imageOf: "/public/images/shell.png",
            website: "http://www.shell.com/",
            description: 'Royal Dutch Shell plc, commonly known as Shell, is a British–Dutch multinational oil and gas company headquartered in the Netherlands and incorporated in the United Kingdom.'
        },{
            nameOf: 'Microsoft',
            imageOf: '/public/images/windows.png',
            website: "https://www.microsoft.com/en-us/",
            description: 'Microsoft Corporation is an American multinational technology company headquartered in Redmond, Washington, that develops, manufactures, licenses, supports and sells computer software, consumer electronics and personal computers and services.'
        },{
            nameOf: 'Xerox',
            imageOf: "/public/images/xerox.png",
            website: "https://www.xerox.com/?CMP=PPC-CORPUS&HBX_PK=xerox&HBX_OU=50&ADGRP=brand",
            description: 'Xerox Corporation is an American global corporation that sells document solutions and services, and document technology products in more than 160 countries.'
        }]
    })
};

//Render function to render the sponsors page
module.exports.sponsorsRender = function (req, res) {
    res.render('sponsors', {
        title: 'Our Sponsors',
        sponsorsList: [{
            nameOf: 'Google',
            imageOf: 'Not Taken Yet',
            website: "https://www.google.com/",
            description: 'Google is an American multinational technology company specializing in Internet-related services and products. These include online advertising technologies, search, cloud computing, software, and hardware.'
        },{
            nameOf: 'Amazon',
            imageOf: 'Not Taken Yet',
            website: "https://www.amazon.com/",
            description: 'Amazon.com, also called Amazon, is an American electronic commerce and cloud computing company that was founded on July 5, 1994, by Jeff Bezos and is based in Seattle, Washington.'
        },{
            nameOf: 'Nintendo',
            imageOf: 'Not Taken Yet',
            website: "https://www.nintendo.com/",
            description: 'Nintendo Co., Ltd. is a Japanese multinational consumer electronics and video game company headquartered in Kyoto, Japan. Nintendo is one of the worlds largest video game companies by market capitalization.'
        },{
            nameOf: 'Oracle',
            imageOf: 'Not Taken Yet',
            website: "https://www.oracle.com/",
            description: 'Oracle Corporation is a multinational computer technology corporation, headquartered in Redwood Shores, California. The company specializes primarily in developing and marketing database software and technology, cloud engineered systems and enterprise software products — particularly its own brands of database management systems. '
        }]
    })
};

//Render function to render the sponsors-info page
module.exports.sponsorsInfoRender = function (req, res) {
    res.render('sponsors-info', {
        title: 'Sponsors Details',
        sponsorsList: [{
            nameOf: 'Google',
            imageOf: 'Not Taken Yet',
            website: "https://www.google.com/",
            description: 'Google is an American multinational technology company specializing in Internet-related services and products. These include online advertising technologies, search, cloud computing, software, and hardware.'
        },{
            nameOf: 'Amazon',
            imageOf: 'Not Taken Yet',
            website: "https://www.amazon.com/",
            description: 'Amazon.com, also called Amazon, is an American electronic commerce and cloud computing company that was founded on July 5, 1994, by Jeff Bezos and is based in Seattle, Washington.'
        },{
            nameOf: 'Nintendo',
            imageOf: 'Not Taken Yet',
            website: "https://www.nintendo.com/",
            description: 'Nintendo Co., Ltd. is a Japanese multinational consumer electronics and video game company headquartered in Kyoto, Japan. Nintendo is one of the worlds largest video game companies by market capitalization.'
        },{
            nameOf: 'Oracle',
            imageOf: 'Not Taken Yet',
            website: "https://www.oracle.com/",
            description: 'Oracle Corporation is a multinational computer technology corporation, headquartered in Redwood Shores, California. The company specializes primarily in developing and marketing database software and technology, cloud engineered systems and enterprise software products — particularly its own brands of database management systems. '
        }]
    })
};
>>>>>>> task-674
