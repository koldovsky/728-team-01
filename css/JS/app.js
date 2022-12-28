(function () {

    const benefits = [
        {
            image: "img/img_features/team2.0.svg",
            description: "Great team"

        },
        {

            image: "img/img_features/lunch2.svg",
            description: "Free lunch"

        },
        {

            image: "img/img_features/office2.svg",
            description: "Beautiful office"

        },
        {

            image: "img/img_features/activities2.0svg",
            description: "Outdoor activities"

        },

    ];

    function renderBenefits(benefits) {
        const benefitsContainer = document.querySelector('.features');
        for (const benefit of benefits) {
            benefitsContainer.innerHTML +=

                `<div class="features__item">

                <div class="features__photo">
                    <img class="features__img" src="${benefit.image}" alt="">
                </div>
                <h4 class="features__text">${benefit.description}</h4>

            </div>`;

        }
    }


    renderBenefits(benefits);

})();