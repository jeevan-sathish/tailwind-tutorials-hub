
interface TutorialSection {
  id: string;
  title: string;
  description: string;
  concepts: TutorialConcept[];
}

interface TutorialConcept {
  id: string;
  title: string;
  description: string;
  code: string;
}

export const tutorialSections: TutorialSection[] = [
  {
    id: "core-concepts",
    title: "Core Concepts",
    description: "Learn the fundamental building blocks of Tailwind CSS",
    concepts: [
      {
        id: "utility-first",
        title: "Utility-First Fundamentals",
        description: "Tailwind CSS is a utility-first CSS framework that uses classes like flex, pt-4, text-center, and rotate-90 directly in your markup to style elements.",
        code: `<div class="flex items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="Tailwind Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">Tailwind CSS</div>
    <p class="text-slate-500">A utility-first CSS framework</p>
  </div>
</div>`
      },
      {
        id: "responsive-design",
        title: "Responsive Design",
        description: "Tailwind's responsive design features let you build responsive interfaces without leaving your HTML using screen size prefixes like sm:, md:, lg:, etc.",
        code: `<!-- This will center on mobile and left-align on larger screens -->
<div class="text-center md:text-left">
  <h1 class="text-2xl md:text-3xl lg:text-4xl">Responsive Text</h1>
  <p class="hidden md:block">This text only appears on medium screens and up</p>
  <div class="flex flex-col sm:flex-row gap-4">
    <div class="bg-blue-500 p-4 w-full sm:w-1/2">Box 1</div>
    <div class="bg-green-500 p-4 w-full sm:w-1/2">Box 2</div>
  </div>
</div>`
      },
      {
        id: "hover-focus-states",
        title: "Hover, Focus & Other States",
        description: "Tailwind provides state variants for hover, focus, active, and more that can be combined with existing utilities.",
        code: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
  Hover or Focus on me
</button>

<input type="text" 
  class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  placeholder="Focus on me">

<a href="#" class="text-blue-500 hover:text-blue-700 hover:underline">Hover over me</a>`
      }
    ]
  },
  {
    id: "styling-text",
    title: "Styling Text",
    description: "Learn how to control text appearance with Tailwind's typography utilities",
    concepts: [
      {
        id: "font-families",
        title: "Font Families",
        description: "Tailwind provides utilities for controlling the font family of an element.",
        code: `<p class="font-sans">The quick brown fox...</p>
<p class="font-serif">The quick brown fox...</p>
<p class="font-mono">The quick brown fox...</p>

<!-- With custom fonts in tailwind.config.js -->
<p class="font-custom">Custom font from your config</p>`
      },
      {
        id: "font-size",
        title: "Font Size",
        description: "Control the font size of an element using the text-{size} utilities.",
        code: `<p class="text-xs">Extra Small Text</p>
<p class="text-sm">Small Text</p>
<p class="text-base">Base Text</p>
<p class="text-lg">Large Text</p>
<p class="text-xl">Extra Large Text</p>
<p class="text-2xl">2XL Text</p>
<p class="text-3xl">3XL Text</p>
<p class="text-4xl">4XL Text</p>
<p class="text-5xl">5XL Text</p>
<p class="text-6xl">6XL Text</p>
<p class="text-7xl">7XL Text</p>
<p class="text-8xl">8XL Text</p>
<p class="text-9xl">9XL Text</p>`
      },
      {
        id: "text-colors",
        title: "Text Colors",
        description: "Change the text color of an element using the text-{color} utilities.",
        code: `<p class="text-slate-500">Slate Text</p>
<p class="text-gray-500">Gray Text</p>
<p class="text-zinc-500">Zinc Text</p>
<p class="text-red-500">Red Text</p>
<p class="text-orange-500">Orange Text</p>
<p class="text-amber-500">Amber Text</p>
<p class="text-yellow-500">Yellow Text</p>
<p class="text-lime-500">Lime Text</p>
<p class="text-green-500">Green Text</p>
<p class="text-emerald-500">Emerald Text</p>
<p class="text-teal-500">Teal Text</p>
<p class="text-cyan-500">Cyan Text</p>
<p class="text-sky-500">Sky Text</p>
<p class="text-blue-500">Blue Text</p>
<p class="text-indigo-500">Indigo Text</p>
<p class="text-violet-500">Violet Text</p>
<p class="text-purple-500">Purple Text</p>
<p class="text-fuchsia-500">Fuchsia Text</p>
<p class="text-pink-500">Pink Text</p>
<p class="text-rose-500">Rose Text</p>`
      }
    ]
  },
  {
    id: "spacing-sizing",
    title: "Spacing & Sizing",
    description: "Control the spacing and sizing of elements with Tailwind's utilities",
    concepts: [
      {
        id: "paddings",
        title: "Paddings",
        description: "Control the padding on all sides of an element using the p-{size} utilities or control the padding on each side independently using pt-{size}, pr-{size}, pb-{size}, and pl-{size}.",
        code: `<!-- All sides padding -->
<div class="p-0">p-0</div>
<div class="p-1">p-1</div>
<div class="p-2">p-2</div>
<div class="p-4">p-4</div>
<div class="p-8">p-8</div>

<!-- Individual side padding -->
<div class="pt-4">padding top</div>
<div class="pr-4">padding right</div>
<div class="pb-4">padding bottom</div>
<div class="pl-4">padding left</div>

<!-- Horizontal and vertical padding -->
<div class="px-4">padding left and right</div>
<div class="py-4">padding top and bottom</div>`
      },
      {
        id: "margins",
        title: "Margins",
        description: "Control the margin on all sides of an element using the m-{size} utilities or control the margin on each side independently.",
        code: `<!-- All sides margin -->
<div class="m-0">m-0</div>
<div class="m-1">m-1</div>
<div class="m-2">m-2</div>
<div class="m-4">m-4</div>
<div class="m-8">m-8</div>

<!-- Individual side margin -->
<div class="mt-4">margin top</div>
<div class="mr-4">margin right</div>
<div class="mb-4">margin bottom</div>
<div class="ml-4">margin left</div>

<!-- Horizontal and vertical margin -->
<div class="mx-4">margin left and right</div>
<div class="my-4">margin top and bottom</div>

<!-- Auto margins for flexbox alignment -->
<div class="flex">
  <div class="mx-auto">horizontally centered</div>
</div>
<div class="flex h-screen">
  <div class="my-auto">vertically centered</div>
</div>`
      },
      {
        id: "width-height",
        title: "Width & Height",
        description: "Control the width and height of elements using Tailwind's sizing utilities.",
        code: `<!-- Fixed width -->
<div class="w-1">w-1 (0.25rem)</div>
<div class="w-4">w-4 (1rem)</div>
<div class="w-48">w-48 (12rem)</div>

<!-- Percentage width -->
<div class="w-1/2">w-1/2 (50%)</div>
<div class="w-1/3">w-1/3 (33.333333%)</div>
<div class="w-2/3">w-2/3 (66.666667%)</div>
<div class="w-1/4">w-1/4 (25%)</div>
<div class="w-3/4">w-3/4 (75%)</div>
<div class="w-full">w-full (100%)</div>

<!-- Fixed height -->
<div class="h-1">h-1 (0.25rem)</div>
<div class="h-4">h-4 (1rem)</div>
<div class="h-48">h-48 (12rem)</div>

<!-- Percentage height -->
<div class="h-1/2">h-1/2 (50%)</div>
<div class="h-full">h-full (100%)</div>
<div class="h-screen">h-screen (100vh)</div>`
      }
    ]
  },
  {
    id: "flexbox-grid",
    title: "Flexbox & Grid",
    description: "Learn how to build layouts with Tailwind's flexbox and grid utilities",
    concepts: [
      {
        id: "flexbox-basics",
        title: "Flexbox Basics",
        description: "Use Tailwind's flexbox utilities to build complex layouts.",
        code: `<!-- Basic flexbox container -->
<div class="flex">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- Direction, wrap, and alignment -->
<div class="flex flex-row"><!-- Default row direction --></div>
<div class="flex flex-col"><!-- Column direction --></div>
<div class="flex flex-wrap"><!-- Allow items to wrap --></div>
<div class="flex flex-nowrap"><!-- Prevent items from wrapping --></div>

<!-- Justify content (main axis) -->
<div class="flex justify-start"><!-- Items aligned at start --></div>
<div class="flex justify-center"><!-- Items centered --></div>
<div class="flex justify-end"><!-- Items aligned at end --></div>
<div class="flex justify-between"><!-- Items evenly distributed with space between --></div>
<div class="flex justify-around"><!-- Items evenly distributed with space around --></div>
<div class="flex justify-evenly"><!-- Items evenly distributed with equal space around --></div>

<!-- Align items (cross axis) -->
<div class="flex items-start"><!-- Items aligned at start --></div>
<div class="flex items-center"><!-- Items centered --></div>
<div class="flex items-end"><!-- Items aligned at end --></div>
<div class="flex items-stretch"><!-- Items stretched to fill --></div>
<div class="flex items-baseline"><!-- Items aligned by baseline --></div>`
      },
      {
        id: "grid-basics",
        title: "Grid Basics",
        description: "Use Tailwind's grid utilities to create grid-based layouts.",
        code: `<!-- Basic grid with 3 equal columns -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- Responsive grid that changes with screen size -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>

<!-- Grid with specific column sizes -->
<div class="grid grid-cols-12 gap-4">
  <div class="col-span-4">4 columns</div>
  <div class="col-span-8">8 columns</div>
  <div class="col-span-6">6 columns</div>
  <div class="col-span-6">6 columns</div>
</div>

<!-- Grid with specific row configurations -->
<div class="grid grid-rows-3 grid-flow-col gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>`
      },
      {
        id: "gap-spacing",
        title: "Gap Spacing",
        description: "Control the spacing between grid and flexbox items with gap utilities.",
        code: `<!-- Grid with different gaps -->
<div class="grid grid-cols-3 gap-4">
  <div>Gap: 1rem</div>
  <div>Gap: 1rem</div>
  <div>Gap: 1rem</div>
</div>

<div class="grid grid-cols-3 gap-x-8 gap-y-4">
  <div>Column gap: 2rem, Row gap: 1rem</div>
  <div>Column gap: 2rem, Row gap: 1rem</div>
  <div>Column gap: 2rem, Row gap: 1rem</div>
</div>

<!-- Flex with gap -->
<div class="flex gap-4">
  <div>Gap: 1rem</div>
  <div>Gap: 1rem</div>
  <div>Gap: 1rem</div>
</div>

<!-- Responsive gaps -->
<div class="grid grid-cols-2 gap-2 md:gap-6 lg:gap-8">
  <div>Responsive gap</div>
  <div>Responsive gap</div>
</div>`
      }
    ]
  },
  {
    id: "backgrounds-borders",
    title: "Backgrounds & Borders",
    description: "Style elements with background colors, gradients, and border utilities",
    concepts: [
      {
        id: "background-colors",
        title: "Background Colors",
        description: "Apply background colors to elements using the bg-{color} utilities.",
        code: `<div class="bg-white">White background</div>
<div class="bg-black">Black background</div>
<div class="bg-red-500">Red background</div>
<div class="bg-blue-500">Blue background</div>
<div class="bg-green-500">Green background</div>
<div class="bg-yellow-500">Yellow background</div>
<div class="bg-indigo-500">Indigo background</div>
<div class="bg-purple-500">Purple background</div>
<div class="bg-pink-500">Pink background</div>

<!-- Gradient background -->
<div class="bg-gradient-to-r from-cyan-500 to-blue-500">
  Cyan to Blue Gradient
</div>

<!-- Background with opacity -->
<div class="bg-blue-500 bg-opacity-50">
  Semi-transparent blue background
</div>`
      },
      {
        id: "borders",
        title: "Borders",
        description: "Apply borders, border widths, border colors, and border radii to elements.",
        code: `<!-- Border all sides -->
<div class="border border-gray-300">All sides border</div>

<!-- Border width -->
<div class="border-2 border-gray-300">Width 2 border</div>
<div class="border-4 border-gray-300">Width 4 border</div>
<div class="border-8 border-gray-300">Width 8 border</div>

<!-- Border on specific sides -->
<div class="border-t border-gray-300">Top border</div>
<div class="border-r border-gray-300">Right border</div>
<div class="border-b border-gray-300">Bottom border</div>
<div class="border-l border-gray-300">Left border</div>

<!-- Border color -->
<div class="border-2 border-blue-500">Blue border</div>
<div class="border-2 border-red-500">Red border</div>
<div class="border-2 border-green-500">Green border</div>

<!-- Border radius -->
<div class="rounded">Default rounded</div>
<div class="rounded-sm">Small rounded</div>
<div class="rounded-md">Medium rounded</div>
<div class="rounded-lg">Large rounded</div>
<div class="rounded-xl">Extra large rounded</div>
<div class="rounded-2xl">2xl rounded</div>
<div class="rounded-3xl">3xl rounded</div>
<div class="rounded-full">Full/circular rounded</div>

<!-- Specific corners rounded -->
<div class="rounded-t-lg">Top corners rounded</div>
<div class="rounded-r-lg">Right corners rounded</div>
<div class="rounded-b-lg">Bottom corners rounded</div>
<div class="rounded-l-lg">Left corners rounded</div>
<div class="rounded-tl-lg">Top left corner rounded</div>
<div class="rounded-tr-lg">Top right corner rounded</div>
<div class="rounded-bl-lg">Bottom left corner rounded</div>
<div class="rounded-br-lg">Bottom right corner rounded</div>`
      },
      {
        id: "box-shadows",
        title: "Box Shadows",
        description: "Apply shadows to elements using Tailwind's shadow utilities.",
        code: `<div class="shadow-sm">Small shadow</div>
<div class="shadow">Default shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">Extra large shadow</div>
<div class="shadow-2xl">2xl shadow</div>
<div class="shadow-inner">Inner shadow</div>
<div class="shadow-none">No shadow</div>

<!-- Colored shadows (requires custom configuration) -->
<div class="shadow-lg shadow-blue-500/50">Blue shadow</div>
<div class="shadow-lg shadow-red-500/50">Red shadow</div>
<div class="shadow-lg shadow-green-500/50">Green shadow</div>`
      }
    ]
  }
];
