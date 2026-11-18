
const tel = document.querySelector(".phon");

const phones = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    brand: "Apple",
    price: 1800,
    color: "Oreng",
    storage: "512GB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8F0hy91lHGMiG3_AHeTtRmmzIU9HgBOC-VQmF_fODA&s=10",
    specifications: {
      display: "6.9 inch OLED",
      processor: "A19 Pro",
      ram: "12GB",
      battery: "5000 mAh",
      camera: "48MP",
      os: "iOS 26",
      network: "5G",
      weight: "230g"
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S26 Ultra",
    brand: "Samsung",
    price: 1600,
    color: "Blue",
    storage: "512GB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdvT5fqflRT7kcnoAybYLpSsaOZ0c3Yf6xT9cWYJljQ&s=10",
    specifications: {
      display: "6.9 inch AMOLED",
      processor: "Snapdragon 8 Elite",
      ram: "12GB",
      battery: "5000 mAh",
      camera: "200MP",
      os: "Android 16",
      network: "5G",
      weight: "218g"
    }
  },
  {
    id: 3,
    name: "Xiaomi 17 Ultra",
    brand: "Xiaomi",
    price: 1400,
    color: "Purple",
    storage: "512GB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNvM2QJoBnZpP-SKHa7QJp1K1FeN4AUjtVcga8x3PCw&s=10",
    specifications: {
      display: "6.8 inch AMOLED",
      processor: "Snapdragon 8 Elite",
      ram: "16GB",
      battery: "6000 mAh",
      camera: "50MP Leica",
      os: "HyperOS",
      network: "5G",
      weight: "225g"
    }
  },
  {
    id: 4,
    name: "Google Pixel 10 Pro",
    brand: "Google",
    price: 1100,
    color: "Blue",
    storage: "256GB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrxZ5SvA6fXsNO81PEFs-4YSAZ1YecACHfyYTiyJmSQ&s=10",
    specifications: {
      display: "6.7 inch OLED",
      processor: "Google Tensor G5",
      ram: "16GB",
      battery: "5000 mAh",
      camera: "50MP",
      os: "Android 16",
      network: "5G",
      weight: "210g"
    }
  },
  {
    id: 5,
    name: "OnePlus 15",
    brand: "OnePlus",
    price: 950,
    color: "Gold",
    storage: "256GB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrRwGWcBplOzfPTH_f55DZYUcFPvcWMzPzhsXU8tNtA&s=10",
    specifications: {
      display: "6.8 inch AMOLED",
      processor: "Snapdragon 8 Elite",
      ram: "16GB",
      battery: "6000 mAh",
      camera: "50MP",
      os: "OxygenOS",
      network: "5G",
      weight: "215g"
    }
  },
  {
    id: 6,
    name: "Honor Magic 8 Pro",
    brand: "Honor",
    price: 1000,
    color: "Black",
    storage: "512GB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC6mWf147O8QWZXgKYRfsUQ_CXnsa5YHt1WjiN5Ds9dA&s=10",
    specifications: {
      display: "6.8 inch OLED",
      processor: "Snapdragon 8 Elite",
      ram: "12GB",
      battery: "5600 mAh",
      camera: "50MP",
      os: "MagicOS",
      network: "5G",
      weight: "220g"
    }
  },
  {
    id: 7,
    name: "Redmi Note 15 Pro",
    brand: "Xiaomi",
    price: 350,
    color: "Black",
    storage: "256GB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQggNvS0ywX82sI3dqvaFP0ROg5D5BSTBMsKAICkfRqJA&s=10",
    specifications: {
      display: "6.7 inch AMOLED",
      processor: "Dimensity 8400",
      ram: "8GB",
      battery: "5500 mAh",
      camera: "200MP",
      os: "HyperOS",
      network: "5G",
      weight: "195g"
    }
  },
  {
    id: 8,
    name: "Samsung Galaxy A56",
    brand: "Samsung",
    price: 400,
    color: "Silver",
    storage: "256GB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4ZDPAjsgJV-2CBSsoT9Zh1gdbyeYVZzXlAdgnD027A&s=10",
    specifications: {
      display: "6.7 inch AMOLED",
      processor: "Exynos 1580",
      ram: "8GB",
      battery: "5000 mAh",
      camera: "50MP",
      os: "Android",
      network: "5G",
      weight: "198g"
    }
  },
  {
    id: 9,
    name: "Nothing Phone 3",
    brand: "Nothing",
    price: 700,
    color: "White",
    storage: "256GB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1M-Ke82ftKGPGXPOHkJd6tzn-pkqPWSid-doPzQIzyQ&s=10",
    specifications: {
      display: "6.7 inch AMOLED",
      processor: "Snapdragon 8s Gen 4",
      ram: "12GB",
      battery: "5000 mAh",
      camera: "50MP",
      os: "Nothing OS",
      network: "5G",
      weight: "205g"
    }
  },
  {
    id: 10,
    name: "Poco F7 Pro",
    brand: "Poco",
    price: 500,
    color: "Black",
    storage: "512GB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYB-MpCPscCVc3oFFspLPL9nrWDKugsgSAI3ZS0jvmxQ&s=10",
    specifications: {
      display: "6.67 inch AMOLED",
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      battery: "6000 mAh",
      camera: "50MP",
      os: "HyperOS",
      network: "5G",
      weight: "206g"
    }
  }
];

tel.innerHTML = phones.map((phone) => {
    return`
    
   <div class="plan">
		<div class="inner">
			<span class="pricing">
				<span>
					${phone.price} <small>/ m</small>
				</span>
			</span>
            <img src=${phone.img} alt="error">
            <p class="title">${phone.name}</p>
			<p class="info">${phone.brand}</p>
            <p class="info">${phone.price}</p>
            <p class="info">${phone.color}</p>
            <p class="info">${phone.storage}</p>
			<ul class="features">
				<li>
					<span class="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>${phone.specifications.display}</span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>${phone.specifications.processor}</span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>${phone.specifications.ram}</span>
				</li>
                <li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>${phone.specifications.battery}</span>
				</li>
                <li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>${phone.specifications.camera}</span>
				</li>
                <li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>${phone.specifications.os}</span>
				</li>
                <li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>${phone.specifications.network}</span>
				</li>
                <li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>${phone.specifications.weight}</span>
				</li>
			</ul>
			<div class="action">
			<a class="button" href="#">
				Choose plan
			</a>
			</div>
		</div>
	</div>


`
})

const inputValue = document.querySelector('.inputName');
const inputEmail = document.querySelector('.inputEmail');
const inputPassword = document.querySelector('.inputPassword');
const form = document.querySelector('form');
const info = document.querySelector('.info');

form.addEventListener('submit', (event) => {
    event.preventDefault();
   
    const fullName = inputValue.value;
    const email = inputValue.email;
    const password = inputValue.password;

    info.innerHTML = `
    <h2>${fullName}</h2>
    <h3>${email}</h3>
    <h4>${password}</h4>

    `
    form.reset()
})