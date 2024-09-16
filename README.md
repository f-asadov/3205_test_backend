## Installing Dependencies

1. **To install all necessary packages, run the following command in the root of the project:**

```bash
npm install
```

## Fill .env
2. **Create and fill in the .env file:**
```
look env_example.txt file
```

## Running server
3. **Run the server:**
```bash
npm run start
```

#### Example request

```http
  POST /api/search
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | user email |
| `number` | `number` | user phone number |