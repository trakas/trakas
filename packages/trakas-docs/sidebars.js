module.exports = {
  docs: [
    {
      type: "category",
      label: "Overview",
      items: ["overview/introduction"],
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["getting-started/installation"],
    },
    {
      type: "category",
      label: "API Reference",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "@trakas/react",
          items: [
            "apis/trakas-react/use-toggle",
            "apis/trakas-react/use-debounce",
            "apis/trakas-react/use-local-storage",
            "apis/trakas-react/use-media",
            "apis/trakas-react/use-prefers-dark-mode",
          ],
        },
      ],
    },
  ],
};
