/* GET home page */
module.exports.homepage = function(req, res) {
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



