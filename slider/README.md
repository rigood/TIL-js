# Slider

๐ 2022. 12. 5. ์์์ผ

[๐ Tutorial : ๋ฐ๋๋ผ ์๋ฐ์คํฌ๋ฆฝํธ๋ก "์บ๋ฌ์ ์ฌ๋ผ์ด๋" ๋ง๋ค๊ธฐ](https://youtu.be/l18HCZqBs6I)

```javascript
const SHOWING_CLASS = "showing";

const firstSlide = document.querySelector(".slide:first-child");

function moveSlide() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}

moveSlide();
setInterval(moveSlide, 2000);
```

- ๊ฐ ์ฌ๋ผ์ด๋๋ฅผ `position: absolute`๋ก ์ง์ ํ์ฌ ํ ์ค์ ๊ฒน์น๋๋ก ํจ

  - ์ฌ๋ผ์ด๋๋ฅผ ๊ฐ์ธ๋ ๋ถ๋ชจ ์์๋ position: relative

- ์ฌ๋ผ์ด๋์ z-index๋ฅผ 0์ผ๋ก ํ๊ณ , `showing` ์ด๋ผ๋ ํด๋์ค๋ฅผ ๋ถ์์ ๋ `z-index๋ฅผ 1๋ก ๋ฐ๊ฟ์ค`

- ์๋ฐ์คํฌ๋ฆฝํธ๋ฅผ ํตํด showing ํด๋์ค๊ฐ ๋ถ์ด์๋ ์ฌ๋ผ์ด๋๋ฅผ ์ฐพ์๋ด๊ณ (์์ผ๋ฉด ์ฒซ๋ฒ์งธ ์ฌ๋ผ์ด๋์ showing ํด๋์ค ์ถ๊ฐํ๊ณ  ์ข๋ฃ)

- ๋ค์ ์ฌ๋ผ์ด๋๋ก ์ ํํ๊ธฐ ์ํด, ํ์ฌ showing ํด๋์ค๊ฐ ๋ถ์ด์๋ ์ฌ๋ผ์ด๋์์ showing ํด๋์ค๋ฅผ ์ ๊ฑฐํ๊ณ , ๊ทธ ๋ค์ ์ฌ๋ผ์ด๋(`nextElementSibling`)์ showing ํด๋์ค๋ฅผ ๋ถ์ฌ์ค

  - nextSibling๊ณผ nextElementSibling์ ๊ณตํต์ : ๋๋ค ๊ฐ์ ๋ธ๋ ๋ ๋ฒจ์ ๋ค์ ๊ฐ์ ๊ฐ์ ธ์ด
  - nextSibling์ ๋ค์ ๊ฐ์ด ๊ณต๋ฐฑ์ด๋  ํ์คํธ์ด๋  ์๊ด์์ด ๊ฐ์ ธ์ด
  - nextElementSibling์ ๋ค์ ๊ฐ์ด Element(์์)์ธ ๊ฒฝ์ฐ๋ง ๊ฐ์ ธ์ด
