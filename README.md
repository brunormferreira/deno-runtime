## Read the documentation to install

Go by link to [Deno](https://deno.land/) documentation.

- You can run both TypeScript (.ts) files, or JavaScript (.js) files.

- Not compatible with Node (NPM) packages.

- Good article from [FreeCodeCamp](https://www.freecodecamp.org/news/the-deno-handbook/).

## Running Deno file

```bash
$ deno run 'file-name'
```

## Formatting Code

```bash
$ deno fmt 'file-name'
```

## Flags

- `--allow-all` (Allow all permissions (same as -A)) - `Don't use it`.
- `--allow-read` (Allow file system read access).
- `--allow-write` (Allow file system write access).
- `--allow-plugin` (Allow loading plugins).
- `--allow-net` (Allow network access).
- `--allow-env` (Allow environment access).
- `--allow-run` (Allow running subprocesses).

## Denon

- On command line, do the following command to [Denon](https://github.com/eliassjogreen/denon) watch file changes.

```bash
$ denon -c .denon server.ts
```