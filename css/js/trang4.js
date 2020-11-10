        const api = 'http://localhost:3000/services';
        const services = document.querySelector('#services');
        fetch(api)
        .then( response => response.json() )
        .then( result => { 
            const servieData = result.map(service => { 
                return `<div>
                            <a href="#"><img class="rounded-md" src="${service.img}" alt=""></a>
                            <div class="text-center sm:text-left mb-5 sm:mt-0">
                                <a href="#">
                                    <h3 class="font-bold mt-5 text-2xl hover:text-green-500 duration-1000">${service.title}</h3>
                                </a>
                                <p class="border-b-4 mx-auto sm:mx-0 mt-2 border-green-500 w-12"></p>
                                <p class="mt-5">${service.desc}</p>
                            </div>
                        </div>`;
            });
            services.innerHTML = servieData;
        })