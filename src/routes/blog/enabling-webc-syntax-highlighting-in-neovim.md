---
title: Enabling Syntax Highlighting for Eleventy's WebC in NeoVim
date: Monday, March 6, 2023
image: /images/JcIsWebC.webp
imagealt: A screenshot of a WebC component's code. The code is a basic HTML header with a site brand link and a navigation menu with links to 'Home,' 'Blog,' and 'About' links. The HTML code is followed by a style tag that includes a special WebC directive - 'webc:keep' and within the style tag is included basic styling for the header. The text is highlighted in various colors of purple, green, orange, and white.
description: Tired of looking at plain WebC files with no syntax highlighting in NeoVim. You don't have to do that anymore.
draft: false
---

<script>
    import Notice from '../../components/Notice.svelte';
</script>

I was messing around with [WebC](https://github.com/11ty/webc) from
[Eleventy](https://www.11ty.dev) over the weekend and ran into a problem getting
syntax highlighting to work in [NeoVim](https://neovim.io). The lack of any
highlighting was almost a show-stopper. I almost gave up and started editing in
VS Code until I found a simple way to get reasonable highlighting to work.

Here's what I figured out:

## Preliminary Setup

<Notice type="warning">

### Warning

If you don't already have NeoVim configured or you're totally new to setting it
up, I don't recommend trying this until you're a little more familiar. I'm by no
means a NeoVim expert. In fact, I've only had my config for a couple of weeks,
and it took me a couple of tries to get this right. I don't know how well the
following steps will work with configurations like [NvChad](https://nvchad.com/)
or [LunarVim](https://www.lunarvim.org/) either. So, you know, YMMV.

If you're interested in building your own NeoVim config,
[this tutorial](https://programmingpercy.tech/blog/learn-how-to-use-neovim-as-ide/)
by Percy Bolmér is a good place to get started.
</Notice>

First, you'll need to make sure you have the
[Treesitter plugin](https://github.com/nvim-treesitter/nvim-treesitter)
installed. If you're coding in NeoVim you probably already have it, but if you
don't, you can find instructions on
[their wiki](https://github.com/nvim-treesitter/nvim-treesitter/wiki/Installation).

The developers of the plugin
[recommend running the nightly build of NeoVim](https://github.com/nvim-treesitter/nvim-treesitter#requirements),
and you'll need to make sure you're following their advice if you're going to
get this syntax highlighting to work. For me, it was as simple as uninstalling
the `0.8` version of NeoVim and then installing the nightly `0.9` version. I'm
working on an Arch-based distro, so all I had to do was open a terminal and type
the following:

```bash
yay -R neovim
```

When that was finished, I installed the nightly build with the command:

```bash
yay nvim-nightly
```

If you're running Arch, I recommend using the
[Chaotic Aur](https://aur.chaotic.cx/) version, so you don't have to spend time
rebuilding the package whenever an update comes out (every night... or every
time you get around to running updates).

If you open NeoVim and type `:version`, you should get an ungodly amount of
output with `NVIM 0.9.0-dev` right up at the top. Congratulations! You're on the
bleeding edge.

## The Actual Config

Find the file where your Treesitter configuration lives. Unless you're proudly
sharing your dotfiles all over the internet, you're probably the only person who
knows exactly where that is (again, if you're new to NeoVim, please go through a
configuration tutorial). For me, it's in
`~/.config/nvim/lua/treesitter-config.lua`. Somewhere down at the bottom, add
the following:

```lua
vim.filetype.add({
    extension = {
        webc = 'webc'
    },
    filename = {['.webc'] = 'html'}
})
```

This gives NeoVim the information it needs to understand that `.webc` is its own
filetype that should be treated like a `.html` file. This doesn't turn on syntax
highlighting yet. That's what the next line does:

```lua
vim.treesitter.language.register('html', 'webc')
```

Now we're registering a new language with Treesitter and telling it to apply the
`webc` filetype you just defined. Reload your lua file with the `:luafile %`
command and open your `.webc` file. You should have gloriously highlighted text!

These instructions were cobbled together based on the directions at the
[Treesitter readme](https://github.com/nvim-treesitter/nvim-treesitter#requirements).

<!-- As much as I love frameworks like [Svelte](https://svelte.dev) (this site is built using [SvelteKit](https://kit.svelte.dev)), I frequently feel the pull of a simpler process for building sites. Don't get me wrong, Svelte is very simple, probably as painless a process as you'll ever find for frontend frameworks, but I do miss the days of writing HTML, CSS, and JavaScript in their own simple, discrete files and watching them work together without hassle. -->

<!-- Luckily, web standards have come a long way in the past few years and we can use web components to achieve the same things as frontend frameworks. One of the sticking points for web components, though, has been their lack of support for server-side rendering. There are a few projects underway to bring web components to the server, and Zach Leatherman of Eleventy fame -->
