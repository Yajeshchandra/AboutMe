// Written only from facts already in resume.tsx. Extend with measured results as you have them.
export const CASE_STUDIES: Record<string, { problem: string; approach: string[]; stack: string[]; result?: string }> = {
  indexit: {
    problem: "Long PDFs are hard to navigate. IndexIt generates a heading structure and clickable bookmarks for documents that have none.",
    approach: [
      "OCR pages with PaddleOCR to recover text from scanned PDFs.",
      "Segment the document by topic and generate contextual headings for each segment.",
      "Chunked uploads for large files, and weighted region selection so users can steer which parts of a page count.",
      "Heading editing in the UI, then export a PDF with navigable bookmarks.",
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "PaddleOCR", "PyTorch"],
  },
  tempest: {
    problem: "Teams need to know whether non-production code can reach production resources. Tempest answers that locally, with evidence.",
    approach: [
      "Build code graphs from the AST, then analyze them with NetworkX.",
      "Reverse reachability from production resources back to non-production code.",
      "Configurable YAML policies decide what counts as a violation.",
      "Results are exposed as evidence paths through MCP tools, with reports stored locally in SQLite and tied to Git branch and commit.",
    ],
    stack: ["Python", "NetworkX", "MCP", "YAML", "SQLite"],
  },
};
