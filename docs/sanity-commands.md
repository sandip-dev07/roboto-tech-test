# Sanity Commands Used

This file lists the Sanity-related commands and GROQ queries used during the CMS setup for this project.

Run these from the repo root:

```powershell
cd "C:\Drive-S\Vs Code\robotostudio\robotox"
```

## 1. Schema Extraction And Type Generation

These commands were used after schema changes.

```powershell
pnpm --filter studio extract
pnpm --filter studio type
pnpm --filter studio check-types
```

What they do:

- `pnpm --filter studio extract`
  Generates the Studio schema snapshot.
- `pnpm --filter studio type`
  Regenerates Sanity TypeScript types.
- `pnpm --filter studio check-types`
  Verifies the Studio app still type-checks.

Generated artifacts:

- `apps/studio/schema.json`
- `packages/sanity/src/sanity.types.ts`

## 2. Create Or Update CMS Documents

These commands were used to upsert content into Sanity.

### Showcase page at `/sanity`

```powershell
pnpm --filter studio seed:sanity-page
```

Underlying command:

```powershell
sanity documents create scripts/data/sanity-page.json --replace
```

Seed file:

- `apps/studio/scripts/data/sanity-page.json`

### Home page at `/`

```powershell
pnpm --filter studio seed:home-page
```

Underlying command:

```powershell
sanity documents create scripts/data/home-page.json --replace
```

Seed file:

- `apps/studio/scripts/data/home-page.json`

### Footer singleton

```powershell
pnpm --filter studio seed:footer
```

Underlying command:

```powershell
sanity documents create scripts/data/footer.json --replace
```

Seed file:

- `apps/studio/scripts/data/footer.json`

### Settings singleton

```powershell
pnpm --filter studio seed:settings
```

Underlying command:

```powershell
sanity documents create scripts/data/settings.json --replace
```

Seed file:

- `apps/studio/scripts/data/settings.json`

## 3. Verification Queries Used

These GROQ queries were used to verify that documents existed in the dataset after seeding.

### Verify `homePage`

Command:

```powershell
npx sanity documents query "*[_type == 'homePage' && _id == 'homePage'][0]{_id,_type,title,'slug':slug.current,'pageBuilderCount':count(pageBuilder)}"
```

Query only:

```groq
*[_type == 'homePage' && _id == 'homePage'][0]{
  _id,
  _type,
  title,
  'slug': slug.current,
  'pageBuilderCount': count(pageBuilder)
}
```

### Verify `/sanity` page

Command:

```powershell
npx sanity documents query "*[_type == 'page' && slug.current == '/sanity'][0]{_id,_type,title,'slug':slug.current,'pageBuilderCount':count(pageBuilder)}"
```

Query only:

```groq
*[_type == 'page' && slug.current == '/sanity'][0]{
  _id,
  _type,
  title,
  'slug': slug.current,
  'pageBuilderCount': count(pageBuilder)
}
```

### Verify footer singleton

Command:

```powershell
npx sanity documents query "*[_type == 'footer' && _id == 'footer'][0]{_id,'hasContact':defined(contact),'hasNewsletter':defined(newsletter),'groupCount':count(columnGroups)}"
```

Query only:

```groq
*[_type == 'footer' && _id == 'footer'][0]{
  _id,
  'hasContact': defined(contact),
  'hasNewsletter': defined(newsletter),
  'groupCount': count(columnGroups)
}
```

### Verify settings logo

Command:

```powershell
npx sanity documents query "*[_type == 'settings'][0]{_id,'logoAssetRef':logo.asset._ref}"
```

Query only:

```groq
*[_type == 'settings'][0]{
  _id,
  'logoAssetRef': logo.asset._ref
}
```

## 4. Optional Direct Sanity CLI Versions

If you do not want to use the package scripts, you can run the CLI directly from `apps/studio`:

```powershell
cd "C:\Drive-S\Vs Code\robotostudio\robotox\apps\studio"
npx sanity schema extract
npx sanity typegen generate
npx sanity documents create scripts/data/home-page.json --replace
npx sanity documents create scripts/data/sanity-page.json --replace
npx sanity documents create scripts/data/footer.json --replace
npx sanity documents create scripts/data/settings.json --replace
```

## 5. Quick Rebuild Flow

If you change schema or seed data again, this is the normal sequence:

```powershell
pnpm --filter studio extract
pnpm --filter studio type
pnpm --filter studio seed:home-page
pnpm --filter studio seed:footer
pnpm --filter studio seed:settings
pnpm --filter studio check-types
```

If you also want the separate showcase page to remain available:

```powershell
pnpm --filter studio seed:sanity-page
```

## 6. Files Touched For This Setup

- `apps/studio/schemaTypes/blocks/product-showcase.ts`
- `apps/studio/schemaTypes/blocks/product-grid-showcase.ts`
- `apps/studio/schemaTypes/documents/footer.ts`
- `apps/studio/schemaTypes/documents/home-page.ts`
- `apps/studio/scripts/data/footer.json`
- `apps/studio/scripts/data/home-page.json`
- `apps/studio/scripts/data/sanity-page.json`
- `apps/studio/scripts/data/settings.json`
- `apps/studio/package.json`
- `packages/sanity/src/query.ts`
- `packages/sanity/src/sanity.types.ts`
- `apps/studio/schema.json`

