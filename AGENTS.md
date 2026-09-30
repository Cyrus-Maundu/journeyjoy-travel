<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture

- Keep public marketing content in separate TanStack routes and shared site chrome in `src/components/site-shell.tsx` so each page has unique metadata and consistent navigation.
- Keep C&C visual values as semantic tokens in `src/styles.css`; page components consume those tokens rather than hardcoded colors.
