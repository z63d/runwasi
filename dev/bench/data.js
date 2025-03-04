window.BENCHMARK_DATA = {
  "lastUpdate": 1741048431362,
  "repoUrl": "https://github.com/z63d/runwasi",
  "entries": {
    "Criterion.rs Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3a72785bf73ec69191929d5529d0ab6c2842a6f6",
          "message": "Merge pull request #885 from jprendes/async-instance-wait\n\nUse async for the instance's wait method",
          "timestamp": "2025-02-27T21:22:36Z",
          "url": "https://github.com/z63d/runwasi/commit/3a72785bf73ec69191929d5529d0ab6c2842a6f6"
        },
        "date": 1740702806439,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15272,
            "unit": "kB",
            "extra": "shim: 12672 kB\nzygote: 2600 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66120,
            "unit": "kB",
            "extra": "shim: 54016 kB\nzygote: 12104 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18688,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3328 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19516,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3260 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3a72785bf73ec69191929d5529d0ab6c2842a6f6",
          "message": "Merge pull request #885 from jprendes/async-instance-wait\n\nUse async for the instance's wait method",
          "timestamp": "2025-02-27T21:22:36Z",
          "url": "https://github.com/z63d/runwasi/commit/3a72785bf73ec69191929d5529d0ab6c2842a6f6"
        },
        "date": 1740703660795,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139436965,
            "range": "± 3936232",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82560880,
            "range": "± 1848824",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112554075,
            "range": "± 2027513",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119564080,
            "range": "± 1523950",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131653977,
            "range": "± 1592421",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134563396,
            "range": "± 1765764",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82094446,
            "range": "± 3085045",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84519086,
            "range": "± 1467509",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3a72785bf73ec69191929d5529d0ab6c2842a6f6",
          "message": "Merge pull request #885 from jprendes/async-instance-wait\n\nUse async for the instance's wait method",
          "timestamp": "2025-02-27T21:22:36Z",
          "url": "https://github.com/z63d/runwasi/commit/3a72785bf73ec69191929d5529d0ab6c2842a6f6"
        },
        "date": 1740789451914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14812,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2524 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66248,
            "unit": "kB",
            "extra": "shim: 54016 kB\nzygote: 12232 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18816,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3328 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19648,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3392 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3a72785bf73ec69191929d5529d0ab6c2842a6f6",
          "message": "Merge pull request #885 from jprendes/async-instance-wait\n\nUse async for the instance's wait method",
          "timestamp": "2025-02-27T21:22:36Z",
          "url": "https://github.com/z63d/runwasi/commit/3a72785bf73ec69191929d5529d0ab6c2842a6f6"
        },
        "date": 1740789503564,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137105957,
            "range": "± 2781138",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80185553,
            "range": "± 848630",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111161117,
            "range": "± 1107171",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 118894274,
            "range": "± 2242390",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 130555876,
            "range": "± 3399073",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 130958102,
            "range": "± 1113496",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81138210,
            "range": "± 2562771",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 81490286,
            "range": "± 1031812",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd",
          "message": "Merge pull request #888 from jprendes/fix-ci\n\n[CI] pin the k3s version",
          "timestamp": "2025-02-28T17:08:14Z",
          "url": "https://github.com/z63d/runwasi/commit/28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd"
        },
        "date": 1740875761318,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14760,
            "unit": "kB",
            "extra": "shim: 12160 kB\nzygote: 2600 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65736,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12104 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18872,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3256 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19388,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3132 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd",
          "message": "Merge pull request #888 from jprendes/fix-ci\n\n[CI] pin the k3s version",
          "timestamp": "2025-02-28T17:08:14Z",
          "url": "https://github.com/z63d/runwasi/commit/28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd"
        },
        "date": 1740875863988,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136565800,
            "range": "± 6534696",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 78858996,
            "range": "± 946120",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 109414460,
            "range": "± 2051058",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 117244020,
            "range": "± 805160",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 127765289,
            "range": "± 4340442",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 131027789,
            "range": "± 1589835",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80100525,
            "range": "± 1752861",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 80474080,
            "range": "± 752809",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd",
          "message": "Merge pull request #888 from jprendes/fix-ci\n\n[CI] pin the k3s version",
          "timestamp": "2025-02-28T17:08:14Z",
          "url": "https://github.com/z63d/runwasi/commit/28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd"
        },
        "date": 1740962232541,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135033548,
            "range": "± 2350385",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 79491744,
            "range": "± 1157868",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 109879740,
            "range": "± 1217539",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119491959,
            "range": "± 3149767",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 129492909,
            "range": "± 4771860",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 131316504,
            "range": "± 1765629",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81399780,
            "range": "± 2231070",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83635286,
            "range": "± 1466451",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd",
          "message": "Merge pull request #888 from jprendes/fix-ci\n\n[CI] pin the k3s version",
          "timestamp": "2025-02-28T17:08:14Z",
          "url": "https://github.com/z63d/runwasi/commit/28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd"
        },
        "date": 1740962339152,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15272,
            "unit": "kB",
            "extra": "shim: 12544 kB\nzygote: 2728 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65608,
            "unit": "kB",
            "extra": "shim: 53376 kB\nzygote: 12232 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18560,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3328 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19644,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3388 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd",
          "message": "Merge pull request #888 from jprendes/fix-ci\n\n[CI] pin the k3s version",
          "timestamp": "2025-02-28T17:08:14Z",
          "url": "https://github.com/z63d/runwasi/commit/28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd"
        },
        "date": 1741048412532,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15016,
            "unit": "kB",
            "extra": "shim: 12544 kB\nzygote: 2472 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65736,
            "unit": "kB",
            "extra": "shim: 53376 kB\nzygote: 12360 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18944,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3328 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19900,
            "unit": "kB",
            "extra": "shim: 16512 kB\nzygote: 3388 kB"
          }
        ]
      }
    ],
    "HTTP Throughput": [
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3a72785bf73ec69191929d5529d0ab6c2842a6f6",
          "message": "Merge pull request #885 from jprendes/async-instance-wait\n\nUse async for the instance's wait method",
          "timestamp": "2025-02-27T21:22:36Z",
          "url": "https://github.com/z63d/runwasi/commit/3a72785bf73ec69191929d5529d0ab6c2842a6f6"
        },
        "date": 1740702825363,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20235.9987,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3a72785bf73ec69191929d5529d0ab6c2842a6f6",
          "message": "Merge pull request #885 from jprendes/async-instance-wait\n\nUse async for the instance's wait method",
          "timestamp": "2025-02-27T21:22:36Z",
          "url": "https://github.com/z63d/runwasi/commit/3a72785bf73ec69191929d5529d0ab6c2842a6f6"
        },
        "date": 1740789450240,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 21071.0999,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd",
          "message": "Merge pull request #888 from jprendes/fix-ci\n\n[CI] pin the k3s version",
          "timestamp": "2025-02-28T17:08:14Z",
          "url": "https://github.com/z63d/runwasi/commit/28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd"
        },
        "date": 1740875790172,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20831.4618,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd",
          "message": "Merge pull request #888 from jprendes/fix-ci\n\n[CI] pin the k3s version",
          "timestamp": "2025-02-28T17:08:14Z",
          "url": "https://github.com/z63d/runwasi/commit/28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd"
        },
        "date": 1740962319271,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20819.5568,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd",
          "message": "Merge pull request #888 from jprendes/fix-ci\n\n[CI] pin the k3s version",
          "timestamp": "2025-02-28T17:08:14Z",
          "url": "https://github.com/z63d/runwasi/commit/28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd"
        },
        "date": 1741048430897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19231.2782,
            "unit": "req/s"
          }
        ]
      }
    ],
    "HTTP Latency": [
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3a72785bf73ec69191929d5529d0ab6c2842a6f6",
          "message": "Merge pull request #885 from jprendes/async-instance-wait\n\nUse async for the instance's wait method",
          "timestamp": "2025-02-27T21:22:36Z",
          "url": "https://github.com/z63d/runwasi/commit/3a72785bf73ec69191929d5529d0ab6c2842a6f6"
        },
        "date": 1740702828670,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.5,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3a72785bf73ec69191929d5529d0ab6c2842a6f6",
          "message": "Merge pull request #885 from jprendes/async-instance-wait\n\nUse async for the instance's wait method",
          "timestamp": "2025-02-27T21:22:36Z",
          "url": "https://github.com/z63d/runwasi/commit/3a72785bf73ec69191929d5529d0ab6c2842a6f6"
        },
        "date": 1740789451631,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.3,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd",
          "message": "Merge pull request #888 from jprendes/fix-ci\n\n[CI] pin the k3s version",
          "timestamp": "2025-02-28T17:08:14Z",
          "url": "https://github.com/z63d/runwasi/commit/28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd"
        },
        "date": 1740875791489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.3,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd",
          "message": "Merge pull request #888 from jprendes/fix-ci\n\n[CI] pin the k3s version",
          "timestamp": "2025-02-28T17:08:14Z",
          "url": "https://github.com/z63d/runwasi/commit/28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd"
        },
        "date": 1740962321705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.3,
            "unit": "ms"
          }
        ]
      }
    ],
    "Stress Test Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3a72785bf73ec69191929d5529d0ab6c2842a6f6",
          "message": "Merge pull request #885 from jprendes/async-instance-wait\n\nUse async for the instance's wait method",
          "timestamp": "2025-02-27T21:22:36Z",
          "url": "https://github.com/z63d/runwasi/commit/3a72785bf73ec69191929d5529d0ab6c2842a6f6"
        },
        "date": 1740703402707,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.3860184127301,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 460ms 546us 485ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.81494474979219,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 921ms 305us 114ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.753253290582661,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 781ms 660us 106ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.975707068497046,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 774ms 810us 393ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.565991920131744,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 929ms 580us 706ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.199102550541664,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 113ms 566us 813ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.55674013481716,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 764ms 45us 785ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.588490354414944,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 671ms 438us 21ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.66695210780604,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 396ms 650us 349ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.4369527352477,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 256ms 102us 795ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.40763440929189,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 947ms 238us 39ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.160222020894764,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 880ms 337us 950ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3a72785bf73ec69191929d5529d0ab6c2842a6f6",
          "message": "Merge pull request #885 from jprendes/async-instance-wait\n\nUse async for the instance's wait method",
          "timestamp": "2025-02-27T21:22:36Z",
          "url": "https://github.com/z63d/runwasi/commit/3a72785bf73ec69191929d5529d0ab6c2842a6f6"
        },
        "date": 1740789923920,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.55191155924298,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 397ms 922us 788ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.73468257336551,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 984ms 17us 990ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.559306294240178,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 684ms 591us 133ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.999654481234066,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 668ms 202us 341ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.87841847094653,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 400ms 257us 465ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.698314455223176,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 671ms 944us 632ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.440860259675974,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 399ms 999us 753ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.99441010849983,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 858ms 925us 526ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.953592789872,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 665ms 668us 80ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 71.77181565118474,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 933ms 45us 875ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.120176136458458,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 34ms 61us 634ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.800104926512324,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 3s 290ms 718us 932ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd",
          "message": "Merge pull request #888 from jprendes/fix-ci\n\n[CI] pin the k3s version",
          "timestamp": "2025-02-28T17:08:14Z",
          "url": "https://github.com/z63d/runwasi/commit/28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd"
        },
        "date": 1740876361596,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.996734943232326,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 231ms 976us 798ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.50417089063729,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 394ms 129us 920ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.87997352713671,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 204ms 420us 638ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.064004216863204,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 383ms 412us 113ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.51303084056441,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 657ms 403us 510ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.213394627541092,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 97ms 902us 845ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.593342131801196,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 565ms 425us 655ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.498659881896565,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 391ms 709us 686ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 81.9281930063853,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 205ms 810us 519ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.30295404267527,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 458ms 415us 118ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.42596396785984,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 879ms 227us 664ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.140460669522216,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 956ms 100us 292ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd",
          "message": "Merge pull request #888 from jprendes/fix-ci\n\n[CI] pin the k3s version",
          "timestamp": "2025-02-28T17:08:14Z",
          "url": "https://github.com/z63d/runwasi/commit/28b9e9a86350829a00ae7418ed2b3ac23bd9e7bd"
        },
        "date": 1740962657961,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.846863431534395,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 666ms 896us 491ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.25418418620397,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 365ms 427us 341ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.525149025167545,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 846ms 109us 480ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.86032373066644,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 293ms 285us"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.8602963270974,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 129ms 461us 769ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.377891115225708,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 39ms 203us 21ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.37062953869089,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 790ms 794us 39ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.18839913006044,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 797ms 268us 39ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.50103342183621,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 903ms 53us 751ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.12281291143532,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 865ms 238us 468ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.194153077096555,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 750ms 682us 190ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.04644580450933,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 319ms 96us 215ns"
          }
        ]
      }
    ]
  }
}