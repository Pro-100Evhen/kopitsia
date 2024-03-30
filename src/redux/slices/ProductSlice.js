import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   products: [
      {
         id: "21505-1",
         sizes: ["18", "22", "52", "70"],
         name: "М'яка іграшка Товстунчик Міша, 70 см.",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/ba2941ce904f9d8cedc699adecb0189d.png",
         price: "1125",
         categories: "плюшеві ведмеді",
         description:
            "Зустрічайте Товстунчика Мішу - найкращого друга для вашої дитини! Ця м'яка іграшка виготовлена з найкращих матеріалів, які гарантують безпеку та комфорт. Його м'яке пухнасте тіло зробить гру з ним приємним і затишним. З висотою 70 см, ця іграшка стане прекрасним супутником у всіх пригодах та іграх вашої дитини. Віддайте їм у світ м'якого комфорту з Товстунчиком Мішею!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "21505-2",
         sizes: ["18", "22", "52", "70"],
         name: "М'яка іграшка Товстунчик Панда, 55 см.",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/aafb6c881cf701bdc14b8b82f0d6c910.png",
         price: "675",
         categories: "плюшеві ведмеді",
         description:
            "Ознайомтеся з Товстунчиком Пандою - чарівним другом для вашого малюка! Ця чудова м'яка іграшка зроблена з увагою до деталей та безпеки вашої дитини. Вона має м'яке пухнасте тіло, яке ідеально підходить для приголомшливих обіймів. З висотою 55 см, ця плюшева панда стане улюбленою іграшкою вашої дитини. Подаруйте їм тепло і затишок з Товстунчиком Пандою!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "21505-3",
         sizes: ["18", "22", "52", "70"],
         name: "М'яка іграшка Товстунчик Панда, 70 см.",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/efa3d9f90b8ec9b9db0242470b1a3ce3.png",
         price: "1125",
         categories: "плюшеві ведмеді",
         description:
            "Знайомтеся з Товстунчиком Пандою - ідеальним компаньйоном для вашої дитини! Ця м'яка іграшка створена з найкращих матеріалів з урахуванням безпеки малюка. Вона має привабливий вигляд і м'яке пухнасте тіло, що забезпечить дитині відчуття комфорту під час гри. З висотою 70 см, ця плюшева панда стане улюбленою іграшкою вашого малюка та принесе безліч радості та веселощів.",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "00716-20",
         sizes: ["18", "22", "52", "70"],
         name: "Ведмедик Антошка, 38 см.(музичний)",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/bcf4fdcf05a111dc80cf0d098c6c8351.png",
         price: "728",
         categories: "плюшеві ведмеді",
         description:
            "Представляємо вам Ведмедика Антошку - надзвичайно чарівну іграшку для вашого малюка! Цей м'який ведмедик має розмір 38 см та є музичним, що робить його ще цікавішим для дитини. Він зроблений з натуральних матеріалів, що забезпечує безпеку та комфорт при контакті з ним. Подаруйте вашому малюкові незабутні моменти гри та веселощів разом з Ведмедиком Антошкою!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "21076",
         name: "Ведмедик Боня, 50 см.",
         sizes: ["18", "22", "52", "70"],
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/8e51fba619037285719e47204e64c147.png",
         price: "1050",
         categories: "плюшеві ведмеді",
         description:
            "Вітаємо з Ведмедиком Боня - ідеальним другом для вашої дитини! Цей м'який плюшевий ведмедик має розмір 50 см і стане прекрасним подарунком для вашого малюка. Він виготовлений з високоякісних матеріалів з урахуванням безпеки та комфорту малюка. Ведмедик Боня готовий віддати безмежну любов і тепло вашій дитині, створюючи незабутні моменти радості та веселощів.",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "21003-011",
         sizes: ["18", "22", "52", "70"],
         name: "Ведмедик Бублик (капучіно), 60 см. (музичний)",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/b277b3cb24834b51796d2365fc75aec7.png",
         price: "728",
         categories: "плюшеві ведмеді",
         description:
            "Представляємо вам Ведмедика Бублика в капучіно-відтінку - привабливу іграшку для вашого малюка! Цей м'який ведмедик має розмір 60 см і є музичним, що робить його ще більш привабливим для дітей. Він виготовлений з високоякісних матеріалів, що забезпечує безпеку та комфорт при контакті з ним. Подаруйте вашому малюкові незабутні моменти гри та веселощів разом з Ведмедиком Бубликом!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "21004",
         sizes: ["18", "22", "52", "70"],
         name: "Ведмедик Бублик (капучино), 90 см.",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/2c763206708144caa7c50cf55ee9cc36.png",
         price: "1350",
         categories: "плюшеві ведмеді",
         description:
            "Представляємо вам Ведмедика Бублика в капучіно-відтінку з розміром 90 см - ідеального компаньйона для вашого малюка! Цей великий іграшковий ведмедик зроблений з м'якого плюшу, що забезпечує приємні відчуття при грі та обіймах. Подаруйте вашому малюку безмежну радість та веселощі разом з Ведмедиком Бубликом!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "21003-010",
         sizes: ["18", "22", "52", "70"],
         name: "Ведмедик Бублик (коричневий), 60 см.(музичний)",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/4c813d5daa4bafaf5f3e5cdf7cc79f39.png",
         price: "728",
         categories: "плюшеві ведмеді",
         description:
            "Ознайомтеся з Ведмедиком Бубликом у коричневому кольорі - надзвичайно милу іграшку для вашої дитини! Цей м'який ведмедик має розмір 60 см та є музичним, що робить гру з ним ще цікавішою. Він виготовлений з високоякісних матеріалів, які гарантують безпеку та комфорт при грі. Запропонуйте вашому малюкові безмежну любов та тепло разом з Ведмедиком Бубликом!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "00002-02",
         sizes: ["18", "22", "52", "70"],
         name: "Ведмедик Бублик (пудра), 120 см.",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/13bee54bf601d73978459871654dde38.png",
         price: "2400",
         categories: "плюшеві ведмеді",
         description:
            "Представляємо Ведмедика Бублика у великому розмірі 120 см - ідеальну іграшку для вашого малюка! Цей м'який ведмедик викликає неймовірні почуття тепла і комфорту. Він виготовлений з натуральних матеріалів, що забезпечує безпеку та максимальний комфорт при контакті з ним. Подаруйте вашому малюкові безмежну радість та незабутні моменти веселощів з Ведмедиком Бубликом!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "00583",
         sizes: ["18", "22", "52", "70"],
         name: "Сувенір Сніговик",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/f289fb0fb00537b742c0d0034be5b116.png",
         price: "278",
         categories: "сувенір",
         description:
            "Представляємо вам чарівного сувеніра - Сніговика! Цей милосердний малюк забарвить ваші святкові настрої і принесе веселощі в ваш дім. Виготовлений з якісних матеріалів, він стане чудовим подарунком для близьких та друзів. Нехай Сніговик стане символом зимового тепла та радості у вашому житті!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "00971-8",
         sizes: ["18", "22", "52", "70"],
         name: "Сувенір танк Леопард, 42см.",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/614f3323deae5fb312d31206a7ee94da.png",
         price: "375",
         categories: "сувенір",
         description:
            "Ознайомтеся з сувенірним танком Леопард - вражаючою іграшкою для колекціонерів та любителів військової техніки! Цей детально пророблений сувенір має розмір 42см і стане чудовим доповненням вашої колекції або оригінальним подарунком для друзів. Запрошуємо вас в мир захоплюючих пригод з сувенірним танком Леопард!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "00970-56",
         sizes: ["18", "22", "52", "70"],
         name: "Сувенір Хаймарс, 38см.",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/ff94734960e7162ff71d6b3a76daf858.png",
         price: "270",
         categories: "сувенір",
         description:
            "Представляємо вам сувенір Хаймарс - надзвичайно милу іграшку, яка принесе радість вашому серцю! Цей чарівний сувенір має розмір 38 см і стане чудовим подарунком для улюблених людей. Виготовлений з високоякісних матеріалів, він стане приємним символом тепла та любові у вашому домі!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "00970-57",
         sizes: ["18", "22", "52", "70"],
         name: "Сувенір Хаймарс, 39см.",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/5942bd872b5358afd89788ce357edf63.png",
         price: "345",
         categories: "сувенір",
         description:
            "Ознайомтеся з наймилішим сувеніром - Хаймарсом! Цей прекрасний сувенір має розмір 39 см і виготовлений з якісних матеріалів, що забезпечують його м'якість та безпеку. Подаруйте Хаймарса вашим близьким та друзям як символ щастя та радості у їхньому житті!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "00275-6",
         sizes: ["18", "22", "52", "70"],
         name: "Обіймашка Морква, 90 см.",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/a6e7f707e5cbd85842f1e34d65481a68.png",
         price: "728",
         categories: "крісла_подушки",
         description:
            "Представляємо вам обіймашку у формі моркви - чудовий аксесуар для вашого домашнього затишку! Ця м'яка подушка має розмір 90 см і стане відмінним доповненням до вашого інтер'єру. Виготовлена з якісних матеріалів, вона забезпечить вам комфорт та затишок під час відпочинку. Подаруйте собі тепло і затишок з обіймашкою Морквою!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "00290-91",
         sizes: ["18", "22", "52", "70"],
         name: "Подушка фрукт Гранат, 27 см",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/e4856ec1f296b69c8bdc8680351ed5a5.png",
         price: "338",
         categories: "крісла_подушки",
         description:
            "Ознайомтеся з найсмачнішою подушкою - Гранатом! Ця яскрава подушка у формі фрукта має розмір 27 см і стане чудовим аксесуаром для вашого домашнього затишку. Вона виготовлена з високоякісних матеріалів, які забезпечують максимальний комфорт під час відпочинку. Подаруйте собі яскраві емоції та комфорт з подушкою Гранатом!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "00970-55",
         sizes: ["18", "22", "52", "70"],
         name: "Мрія сувенір , 38 см.",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/428bdca9d02b7cf82276d08bb434d5f0.png",
         price: "270",
         categories: "все_буде_україна",
         description:
            "Представляємо вам сувенір Мрія - символ надії та оптимізму для кожного українця! Цей м'який сувенір має розмір 38 см і стане прекрасним подарунком для усіх, хто вірить у краще майбутнє нашої країни. Виготовлений з високоякісних матеріалів, він забезпечить вам комфорт і радість при кожному погляді на нього. Подаруйте собі та своїм близьким символ мрії та надії з сувеніром Мрія!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "25069",
         sizes: ["18", "22", "52", "70"],
         name: "М'яка іграшка Риба Клоун, 25 см",
         price: "150",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/d17140f517f3c9bc7578e1bec189ead7.png",
         categories: "М'які іграшки",
         description:
            "Зустрічайте чарівну іграшку - Рибу Клоуна! Ця м'яка іграшка має розмір 25 см і стане прекрасним подарунком для вашого малюка. Вона виготовлена з найкращих матеріалів, які забезпечують безпеку та комфорт при грі. Подаруйте вашому малюкові незабутні моменти веселощів та радості з М'якою іграшкою Риба Клоун!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "21524-6",
         sizes: ["18", "22", "52", "70"],
         name: "М'яка іграшка Дельфін Зоо, 24 см.",
         price: "225",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/4bf124e45404ce66bda522de1663eda5.png",
         categories: "М'які іграшки",
         description:
            "Представляємо вам чарівного Дельфіна Зоо - ідеальну іграшку для вашого малюка! Цей м'який дельфін має розмір 24 см і стане відмінним другом для ваших пригод. Виготовлений з якісних матеріалів, він забезпечить вашому малюку безмежну радість та веселощі. Подаруйте вашому малюкові незабутні моменти гри з Дельфіном Зоо!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "25007",
         sizes: ["18", "22", "52", "70"],
         name: "М'яка іграшка Дельфін Лаккі 3, 100 см.",
         price: "825",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/3b6a48417b06240619bfaabac3e32c3a.png",
         categories: "М'які іграшки",
         description:
            "Зустрічайте найбільшого дельфіна - Лаккі 3! Ця м'яка іграшка має вражаючий розмір 100 см і стане незамінним другом для вашого малюка. Виготовлений з високоякісних матеріалів, він забезпечить комфорт та задоволення при грі. Подаруйте вашому малюкові незабутні моменти радості та веселощів з Дельфіном Лаккі 3!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "21524-5",
         sizes: ["18", "22", "52", "70"],
         name: "М'яка іграшка Дельфін Сьома, 25 см.",
         price: "300",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/132da931b5e44070d37fe5d94e0e530b.png",
         categories: "М'які іграшки",
         description:
            "Ознайомтеся з наймилішим дельфіном - Сьома! Цей м'який дельфін має розмір 25 см і стане відмінним другом для вашого малюка. Виготовлений з натуральних матеріалів, він забезпечить безпеку та комфорт при грі. Подаруйте вашому малюкові незабутні моменти гри та радості з Дельфіном Сьома!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "25011",
         sizes: ["18", "22", "52", "70"],
         name: "М'яка іграшка Дельфін, 24 см.",
         price: "300",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/dfb0fd3fe3e582a6f8f1cf371993087b.png",
         categories: "М'які іграшки",
         description:
            "Представляємо вам милого Дельфіна - чудову іграшку для вашого малюка! Цей м'який дельфін має розмір 24 см і стане прекрасним компаньйоном для ваших пригод. Виготовлений з високоякісних матеріалів, він забезпечить безпеку та комфорт при грі. Подаруйте вашому малюкові незабутні моменти радості та веселощів з М'якою іграшкою Дельфіном!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "21501",
         sizes: ["18", "22", "52", "70"],
         name: "М'яка іграшка Обіймашка Крокодил 1, 100 см.",
         price: "900",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/899bd811f14b59524aa5019767f6c4fc.png",
         categories: "М'які іграшки",
         description:
            "Представляємо вам величезного крокодила - Обіймашку Крокодила 1! Ця м'яка іграшка має вражаючий розмір 100 см і стане відмінним другом для вашого малюка. Виготовлена з високоякісних матеріалів, вона забезпечить безмежну радість та веселощі. Подаруйте вашому малюкові незабутні моменти гри з Обіймашкою Крокодилом 1!",
         isInCart: false,
         isInFavorite: false,
      },
      {
         id: "00594-5",
         sizes: ["18", "22", "52", "70"],
         name: "Подушка Акула синя, 25см.",
         price: "420",
         imageUrl:
            "https://toys-kopitsa.com.ua/image/cache/9da0a7d0f59245e016ec9aa85c532b8a.png",
         categories: "Подушки",
         description:
            "Ознайомтеся з унікальною подушкою - Акулою! Ця яскрава подушка у формі акули має розмір 25 см і стане чудовим доповненням до вашого інтер'єру. Виготовлена з якісних матеріалів, вона забезпечить комфорт та затишок під час відпочинку. Подаруйте собі яскраві емоції та комфорт з Подушкою Акулою!",
         isInCart: false,
         isInFavorite: false,
      },
   ],
   isLoading: false,
};

const ProductSlice = createSlice({
   name: "products",
   initialState: initialState,
   reducers: {
      setIsInCart: (state, action) => {
         const productId = action.payload.productId;
         state.products = state.products.map((product) => {
            if (product.id === productId) {
               return { ...product, isInCart: true };
            }
            return product;
         });
      },
   },
});

export const { setIsInCart } = ProductSlice.actions;

export const selectorProducts = (state) => state.products;

export default ProductSlice.reducer;
