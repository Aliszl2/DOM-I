const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Nav
let navBar = document.getElementsByTagName("a");
console.log(navBar);

 navBar[0].textContent="Services";
 navBar[1].textContent="Product";
 navBar[2].textContent="Vision";
 navBar[3].textContent="Features";
 navBar[4].textContent="About";
 navBar[5].textContent="Contact";
// Images
 let roundImg = document.querySelector("#cta-img");
 console.log(roundImg);
 roundImg.src = "img/header-img.png";

 let midPageImg = document.querySelector("#middle-img");
 console.log(midPageImg);
 midPageImg.src = "img/mid-page-accent.jpg";

 //CTA
 let ctaButton = document.querySelector(".cta .cta-text button");
 console.log(ctaButton);
 ctaButton.textContent = "Get Started";

 let ctaText = document.querySelector(".cta .cta-text h1");
 console.log(ctaButton);
 ctaText.textContent = "DOM IS AWESOME";

//Top Content

let topContentHeader = document.querySelectorAll(".top-content h4");
let topContentPara = document.querySelectorAll(".top-content p");
console.log(topContentHeader);
topContentHeader[0].textContent="Features";
topContentPara[0].textContent="Features content lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat";
topContentHeader[1].textContent="About";
topContentPara[1].textContent="About content lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat";


// Bottom content
let bottomContentHeader = document.querySelectorAll(".bottom-content h4");
let bottomContentPara = document.querySelectorAll(".bottom-content p");
console.log(topContentHeader);
bottomContentHeader[0].textContent="Services";
bottomContentPara[0].textContent="Features content lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat";
bottomContentHeader[1].textContent="Product";
bottomContentPara[1].textContent="About content lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat";
bottomContentHeader[2].textContent="Vision";
bottomContentPara[2].textContent="Vision content lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat";
