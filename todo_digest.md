# TODO Digest

This ledger tracks injected TODOs and their lifecycle status.

- _Pending_: Not yet executed.
- _In Progress_: Assigned to an agent.
- _Done_: Completed and verified.

## Pending

_None_

## In Progress

_None_

## Done

- **todo_anno_activation_smoke** — Verify capsule activation via health probe and smoke check. _(source: sprint_cards/2025-02-anno-hardening.md)_
- **todo_anno_batch_integration_test** — Add integration test covering /v1/content/batch-fetch streaming events and policy enforcement toggles. _(source: sprint_cards/2025-02-anno-hardening.md)_
- **todo_anno_c8_coverage** — Introduce c8/coverage pipeline for tools/anno with ≥85% threshold and CI-friendly command. _(source: sprint_cards/2025-02-anno-hardening.md)_
- **todo_anno_capsule_manifest** — Create halcyon_tools/anno capsule manifest with start/stop commands, health probes, and capability metadata. _(source: sprint_cards/2025-02-anno-hardening.md)_
- **todo_anno_capsule_playbook** — Author docs/anno_tool_capsule.md playbook covering activation, auth, telemetry, and teardown. _(source: sprint_cards/2025-02-anno-hardening.md)_
- **todo_anno_cli_activation** — Expose halcyon tools activate|status anno CLI verbs to orchestrate environment checks and registration. _(source: sprint_cards/2025-02-anno-hardening.md)_
- **todo_anno_config_schema** — Update .halcyon_config.yaml schema to guard required env vars, ports, and lockable tool binaries. _(source: sprint_cards/2025-02-anno-hardening.md)_
- **todo_anno_devnote_linkage** — Record hardening decisions and validation evidence in dev_notes.md with links to Validation Summary. _(source: sprint_cards/2025-02-anno-hardening.md)_
- **todo_anno_digest_alignment** — Automate digest updates once TODOs are injected/executed by agents to maintain FDMC traceability. _(source: sprint_cards/2025-02-anno-hardening.md)_
- **todo_anno_fdmc_logging** — Pipe critical Anno events through FDMC logging adapter so system_log.md reflects research actions. _(source: sprint_cards/2025-02-anno-hardening.md)_
- **todo_anno_ndjson_bridge** — Implement NDJSON-to-dev-graph bridge that stores provenance, checksums, and confidence in Halcyon capsules. _(source: sprint_cards/2025-02-anno-hardening.md)_
- **todo_anno_provenance_docstrings** — Ensure new modules expose docstrings/TSDoc and log provenance (agent + model) for task dispatch. _(source: sprint_cards/2025-02-anno-hardening.md)_
