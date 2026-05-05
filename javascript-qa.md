# JavaScript Q&A

## Питання 1

**Питання:** Immediately Invoked Function Expression: наведи приклади реального використання.

**Відповідь:** `IIFE` (`Immediately Invoked Function Expression`) — це функція, яку створюють і викликають одразу.

```js
(function () {
  console.log('run now');
})();
```

### Реальні сценарії використання

1. Ізоляція змінних, щоб не засмічувати глобальну область

```js
(function () {
  const apiKey = 'local-config';
  const cache = new Map();

  function getUser(id) {
    return cache.get(id);
  }

  window.appGetUser = getUser;
})();
```

Це було дуже типово до появи ES-модулів.

2. Створення приватного стану

```js
const counter = (function () {
  let value = 0;

  return {
    inc() { value++; },
    get() { return value; }
  };
})();

counter.inc();
console.log(counter.get()); // 1
```

`value` зовні недоступний.

3. Ініціалізація коду один раз при завантаженні сторінки

```js
(function () {
  const button = document.querySelector('#theme-toggle');
  if (!button) return;

  button.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
})();
```

Патерн зручний, коли треба просто запустити setup.

4. Обгортка для старого frontend-коду або стороннього скрипта

```js
(function (global, $) {
  function initSlider() {
    $('.slider').addClass('ready');
  }

  global.initSlider = initSlider;
})(window, jQuery);
```

Так часто писали jQuery-плагіни й старі бібліотеки.

5. Асинхронний запуск там, де хочеться `await`

```js
(async function () {
  const res = await fetch('/api/user');
  const user = await res.json();
  console.log(user);
})();
```

Корисно, коли треба швидко виконати async-логіку без окремого іменованого виклику.

6. Захоплення значення в циклі

Старий, але реальний кейс з `var`:

```js
for (var i = 0; i < 3; i++) {
  (function (index) {
    setTimeout(() => console.log(index), 100);
  })(i);
}
```

Без IIFE всі `setTimeout` могли б взяти одне й те саме значення.

7. UMD / бібліотеки для різних середовищ

```js
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.myLib = factory();
  }
})(this, function () {
  return {
    hello() {
      return 'hi';
    }
  };
});
```

Так бібліотеки працювали і в браузері, і в Node.js.

### Коли IIFE зараз доречний

- швидка одноразова ініціалізація;
- ізоляція тимчасових змінних;
- async-обгортка для локального коду;
- legacy JavaScript без модулів.

### Коли вже не дуже потрібен

У сучасних проєктах з `ES modules` IIFE часто не потрібен, бо модулі вже дають окрему область видимості.

---

## Питання 2

**Питання:** Які актуальні приклади використання IIFE у `React/Next.js` та `Node.js`?

**Відповідь:** Станом на `25.04.2026` IIFE у сучасному `React/Next.js` і `Node.js` вже не є базовим патерном. Його варто розглядати як точковий інструмент для вузьких задач, а не як стандартний спосіб організації коду.

Головне правило сіньйорського рівня: якщо фреймворк або платформа вже дає нативний механізм для задачі, використовуй його, а не IIFE.

### React: де IIFE ще може бути доречний

#### 1. `async` логіка всередині `useEffect`

Сам callback у `useEffect` не повинен бути `async`, тому в реальному коді іноді використовують async IIFE.

```tsx
import { useEffect, useState } from 'react';

export function UserCard({ userId }: { userId: string }) {
  const [user, setUser] = useState<null | { name: string }>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const res = await fetch(`/api/users/${userId}`);
      const data = await res.json();

      if (!cancelled) {
        setUser(data);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (!user) return <p>Loading...</p>;
  return <h2>{user.name}</h2>;
}
```

Чому це реальний кейс:

- `React` очікує, що `useEffect` поверне або `cleanup`, або нічого;
- `async function` повертає `Promise`, тому напряму робити `useEffect(async () => {})` не можна;
- IIFE тут виступає як локальна обгортка для асинхронного коду.

Менторська примітка: якщо така логіка повторюється, краще винести її в кастомний хук або використати data-fetching рішення рівня застосунку.

#### 2. Локальний багатокроковий рендер усередині JSX

Іноді IIFE використовують, коли прямо в JSX треба виконати кілька кроків і повернути один фрагмент.

```tsx
function PaymentStatus({
  isLoading,
  error,
  isPaid,
}: {
  isLoading: boolean;
  error: string | null;
  isPaid: boolean;
}) {
  return (
    <section>
      {(() => {
        if (isLoading) return <p>Loading payment...</p>;
        if (error) return <p>Payment failed: {error}</p>;
        if (isPaid) return <p>Paid</p>;
        return <p>Waiting for payment</p>;
      })()}
    </section>
  );
}
```

Це працює, але в більшості випадків читабельніше так:

```tsx
function PaymentStatus({ isLoading, error, isPaid }) {
  let content;

  if (isLoading) content = <p>Loading payment...</p>;
  else if (error) content = <p>Payment failed: {error}</p>;
  else if (isPaid) content = <p>Paid</p>;
  else content = <p>Waiting for payment</p>;

  return <section>{content}</section>;
}
```

Менторська примітка: у `React` IIFE в рендері допустимий, але часто програє по читабельності звичайному `if`, змінній або окремому компоненту.

### React: де IIFE вже радше погана ідея

#### 1. Не клади side effects у render

Погано:

```tsx
function BadComponent() {
  return (
    <div>
      {(() => {
        localStorage.setItem('visited', '1');
        return 'Hello';
      })()}
    </div>
  );
}
```

Чому це помилка:

- render у `React` має бути чистим;
- запис у `localStorage`, підписки, таймери, мережеві запити мають жити в `useEffect` або в обробниках подій;
- IIFE не робить side effect безпечним, він лише маскує його.

#### 2. Не викликай хуки всередині IIFE

Погано:

```tsx
function BadComponent() {
  return (() => {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  })();
}
```

Хуки мають викликатися на верхньому рівні компонента або кастомного хука, а не всередині вкладеної функції.

### Next.js: актуальний контекст

#### 1. У `Server Components` async IIFE зазвичай не потрібен

У сучасному `Next.js` сторінки й layout за замовчуванням є `Server Components`, а серверний компонент може бути `async`.

Правильно:

```tsx
import { getUser } from '@/lib/user';

export default async function DashboardPage() {
  const user = await getUser();
  return <h1>Dashboard for {user.name}</h1>;
}
```

Антипатерн:

```tsx
import { getUser } from '@/lib/user';

export default function DashboardPage() {
  return (async () => {
    const user = await getUser();
    return <h1>Dashboard for {user.name}</h1>;
  })();
}
```

Чому другий варіант гірший:

- він ускладнює те, що `Next.js` уже вміє робити нативно;
- приховує справжню async-природу компонента;
- робить код менш очевидним для команди.

#### 2. У `Client Components` IIFE іноді доречний всередині `useEffect`

Наприклад, коли треба разово зчитати щось із браузерного API і добути асинхронні дані.

```tsx
'use client';

import { useEffect, useState } from 'react';

export function ClientProfile() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const token = window.localStorage.getItem('token');
      if (!token) return;

      const res = await fetch('/api/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      setName(data.name);
    })();
  }, []);

  return <p>{name ?? 'Loading...'}</p>;
}
```

Тут IIFE не є "магією". Він просто дозволяє тримати async-логіку локально в `effect`.

### Node.js: де IIFE досі реальний

#### 1. Bootstrap у `CommonJS`, коли потрібен `await`

Якщо файл ще працює як `CommonJS`, top-level `await` там недоступний. Тому async IIFE усе ще нормальний варіант для старту програми.

```js
const http = require('node:http');
const { connectToDb } = require('./db');

(async () => {
  const db = await connectToDb();

  const server = http.createServer((req, res) => {
    res.end('OK');
  });

  server.listen(3000, () => {
    console.log('Server started with DB:', db.name);
  });
})().catch((error) => {
  console.error('Startup failed:', error);
  process.exit(1);
});
```

Це реальний, практичний кейс для:

- старих сервісів на `CommonJS`;
- CLI-скриптів;
- міграційних або bootstrap-файлів.

#### 2. У `ESM` в Node.js IIFE часто вже не потрібен

Якщо файл є `ES module`, можна писати напряму:

```js
import http from 'node:http';
import { connectToDb } from './db.js';

const db = await connectToDb();

const server = http.createServer((req, res) => {
  res.end('OK');
});

server.listen(3000, () => {
  console.log('Server started with DB:', db.name);
});
```

Менторська примітка: якщо в тебе сучасний `Node.js` і `ESM`, спочатку подумай про top-level `await`, а не про IIFE.

#### 3. Одноразова ізоляція допоміжної логіки в скрипті

Іноді IIFE використовують у маленьких службових скриптах, щоб обмежити видимість тимчасових змінних.

```js
const fs = require('node:fs');

(() => {
  const raw = fs.readFileSync('./input.json', 'utf8');
  const parsed = JSON.parse(raw);
  const activeUsers = parsed.filter((user) => user.active);

  console.log(activeUsers.length);
})();
```

Але тут важлива інженерна ремарка: у `Node.js` це часто зайве, бо модуль і так має власний scope.

### Node.js: що важливо розуміти про модулі

У `CommonJS` Node.js і так загортає кожен файл у функцію-обгортку. Тобто локальні змінні файлу вже приватні на рівні модуля. Через це IIFE для "приватності" в багатьох `Node.js` файлах не додає реальної користі.

### Практичний висновок

Як мислить сіньйор:

- у `React` IIFE допустимий переважно як локальна техніка для `async` усередині `useEffect` або для вузького JSX-обчислення;
- у `Next.js` на сервері частіше треба `async component`, а не IIFE;
- у `Node.js CommonJS` async IIFE досі практичний;
- у `Node.js ESM` top-level `await` часто кращий;
- якщо IIFE приховує неправильне місце для side effect або робить код менш читабельним, це вже не інструмент, а борг.

### Джерела

- React `useEffect`: https://react.dev/reference/react/useEffect
- React conditional rendering: https://react.dev/learn/conditional-rendering
- React purity: https://react.dev/learn/keeping-components-pure
- Next.js `use client`: https://nextjs.org/docs/app/api-reference/directives/use-client
- Next.js Server and Client Components: https://nextjs.org/docs/app/getting-started/server-and-client-components
- Next.js data fetching: https://nextjs.org/docs/app/getting-started/fetching-data
- Node.js CommonJS modules: https://nodejs.org/download/release/v22.11.0/docs/api/modules.html
- Node.js ECMAScript modules: https://nodejs.org/download/release/v20.18.0/docs/api/esm.html
