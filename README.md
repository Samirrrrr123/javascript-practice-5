# Практическая работа №5

Рецепты на Angular. Данные берутся с DummyJSON.

Можно выбрать завтрак, обед или ужин и сложность приготовления.
При смене категории сложность сохраняется. Рецепты листаются горизонтально.
Кнопка Recipe открывает инструкции выбранного рецепта.

## Запуск

Нужен Node.js 24.15 или новее.

```bash
npm install
npm start
```

Сборка: `npm run build`.

Маршруты: `/breakfast/all`, `/lunch/easy`, `/dinner/medium`, `/recipe/:id`.
Для категорий доступны сложности `all`, `easy`, `medium`.
Получение и фильтрация находятся в `RecipesService`.

Ветка `main` — код, `pages` — сборка сайта.

[Открыть сайт](https://samirrrrr123.github.io/javascript-practice-5/)
