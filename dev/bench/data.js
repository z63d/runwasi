window.BENCHMARK_DATA = {
  "lastUpdate": 1741567214653,
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
        "date": 1741048525001,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137305124,
            "range": "± 2750445",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80978414,
            "range": "± 900178",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112103434,
            "range": "± 983689",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121911067,
            "range": "± 1724711",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133323874,
            "range": "± 4135744",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134275073,
            "range": "± 2506017",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81126118,
            "range": "± 2438968",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82556083,
            "range": "± 835035",
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
        "date": 1741134814526,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14504,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2472 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65608,
            "unit": "kB",
            "extra": "shim: 53248 kB\nzygote: 12360 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18692,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3332 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19772,
            "unit": "kB",
            "extra": "shim: 16512 kB\nzygote: 3260 kB"
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
        "date": 1741134997877,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137530012,
            "range": "± 2692815",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82600570,
            "range": "± 1057538",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111063943,
            "range": "± 1216570",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119557537,
            "range": "± 1814722",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133441400,
            "range": "± 3281042",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 136508549,
            "range": "± 1916292",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82988699,
            "range": "± 2307706",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85467642,
            "range": "± 666666",
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
        "date": 1741221285214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14760,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2472 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65992,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12232 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18560,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3200 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19900,
            "unit": "kB",
            "extra": "shim: 16640 kB\nzygote: 3260 kB"
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
        "date": 1741221392294,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 134013197,
            "range": "± 2749105",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82863919,
            "range": "± 11070766",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 110916402,
            "range": "± 1488026",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 117059455,
            "range": "± 1345858",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 130383404,
            "range": "± 3099775",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 130694643,
            "range": "± 4032205",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80131528,
            "range": "± 3837334",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82268737,
            "range": "± 1107804",
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
        "date": 1741307628685,
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
            "value": 65864,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12360 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18820,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3460 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19772,
            "unit": "kB",
            "extra": "shim: 16512 kB\nzygote: 3260 kB"
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
        "date": 1741307803336,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140861176,
            "range": "± 3783804",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84289223,
            "range": "± 1442736",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 120151688,
            "range": "± 2582474",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 126521335,
            "range": "± 2963642",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 136152039,
            "range": "± 4475141",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 138481684,
            "range": "± 2391977",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83905108,
            "range": "± 3465011",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86915168,
            "range": "± 477356",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07ea10e67274338589bf32d3942647bdd9a4c4d1",
          "message": "Merge pull request #897 from containerd/dependabot/github_actions/peaceiris/actions-gh-pages-4\n\nchore(deps): bump peaceiris/actions-gh-pages from 3 to 4",
          "timestamp": "2025-03-07T19:44:06Z",
          "url": "https://github.com/z63d/runwasi/commit/07ea10e67274338589bf32d3942647bdd9a4c4d1"
        },
        "date": 1741394249302,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15528,
            "unit": "kB",
            "extra": "shim: 12544 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66400,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12640 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19204,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3716 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19648,
            "unit": "kB",
            "extra": "shim: 16128 kB\nzygote: 3520 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07ea10e67274338589bf32d3942647bdd9a4c4d1",
          "message": "Merge pull request #897 from containerd/dependabot/github_actions/peaceiris/actions-gh-pages-4\n\nchore(deps): bump peaceiris/actions-gh-pages from 3 to 4",
          "timestamp": "2025-03-07T19:44:06Z",
          "url": "https://github.com/z63d/runwasi/commit/07ea10e67274338589bf32d3942647bdd9a4c4d1"
        },
        "date": 1741394430987,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138493680,
            "range": "± 2117889",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83075981,
            "range": "± 1177253",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114729434,
            "range": "± 2507033",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 123283616,
            "range": "± 4439736",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133149976,
            "range": "± 2789768",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 136456044,
            "range": "± 1940013",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 85183365,
            "range": "± 1918982",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 87065840,
            "range": "± 1159962",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07ea10e67274338589bf32d3942647bdd9a4c4d1",
          "message": "Merge pull request #897 from containerd/dependabot/github_actions/peaceiris/actions-gh-pages-4\n\nchore(deps): bump peaceiris/actions-gh-pages from 3 to 4",
          "timestamp": "2025-03-07T19:44:06Z",
          "url": "https://github.com/z63d/runwasi/commit/07ea10e67274338589bf32d3942647bdd9a4c4d1"
        },
        "date": 1741480365517,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15400,
            "unit": "kB",
            "extra": "shim: 12416 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66256,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19080,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3592 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19396,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3396 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07ea10e67274338589bf32d3942647bdd9a4c4d1",
          "message": "Merge pull request #897 from containerd/dependabot/github_actions/peaceiris/actions-gh-pages-4\n\nchore(deps): bump peaceiris/actions-gh-pages from 3 to 4",
          "timestamp": "2025-03-07T19:44:06Z",
          "url": "https://github.com/z63d/runwasi/commit/07ea10e67274338589bf32d3942647bdd9a4c4d1"
        },
        "date": 1741480425226,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138258744,
            "range": "± 3658800",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81381960,
            "range": "± 1163836",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112688087,
            "range": "± 932026",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119556887,
            "range": "± 2507312",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135856873,
            "range": "± 5601687",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135621584,
            "range": "± 1739338",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83711035,
            "range": "± 1680028",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84932761,
            "range": "± 1332873",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07ea10e67274338589bf32d3942647bdd9a4c4d1",
          "message": "Merge pull request #897 from containerd/dependabot/github_actions/peaceiris/actions-gh-pages-4\n\nchore(deps): bump peaceiris/actions-gh-pages from 3 to 4",
          "timestamp": "2025-03-07T19:44:06Z",
          "url": "https://github.com/z63d/runwasi/commit/07ea10e67274338589bf32d3942647bdd9a4c4d1"
        },
        "date": 1741566616326,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15400,
            "unit": "kB",
            "extra": "shim: 12416 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66000,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18692,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3460 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19376,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3376 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07ea10e67274338589bf32d3942647bdd9a4c4d1",
          "message": "Merge pull request #897 from containerd/dependabot/github_actions/peaceiris/actions-gh-pages-4\n\nchore(deps): bump peaceiris/actions-gh-pages from 3 to 4",
          "timestamp": "2025-03-07T19:44:06Z",
          "url": "https://github.com/z63d/runwasi/commit/07ea10e67274338589bf32d3942647bdd9a4c4d1"
        },
        "date": 1741566728712,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137681764,
            "range": "± 3774952",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81693748,
            "range": "± 1428712",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 110809761,
            "range": "± 746110",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 117871194,
            "range": "± 2241601",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131746845,
            "range": "± 3501311",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134783460,
            "range": "± 2361978",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81626288,
            "range": "± 1416443",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83139446,
            "range": "± 1550632",
            "unit": "ns/iter"
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
        "date": 1741134913326,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19590.2168,
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
        "date": 1741221312073,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20958.2431,
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
        "date": 1741307638440,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20526.3612,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07ea10e67274338589bf32d3942647bdd9a4c4d1",
          "message": "Merge pull request #897 from containerd/dependabot/github_actions/peaceiris/actions-gh-pages-4\n\nchore(deps): bump peaceiris/actions-gh-pages from 3 to 4",
          "timestamp": "2025-03-07T19:44:06Z",
          "url": "https://github.com/z63d/runwasi/commit/07ea10e67274338589bf32d3942647bdd9a4c4d1"
        },
        "date": 1741394410789,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20873.2274,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07ea10e67274338589bf32d3942647bdd9a4c4d1",
          "message": "Merge pull request #897 from containerd/dependabot/github_actions/peaceiris/actions-gh-pages-4\n\nchore(deps): bump peaceiris/actions-gh-pages from 3 to 4",
          "timestamp": "2025-03-07T19:44:06Z",
          "url": "https://github.com/z63d/runwasi/commit/07ea10e67274338589bf32d3942647bdd9a4c4d1"
        },
        "date": 1741480260160,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19459.5864,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07ea10e67274338589bf32d3942647bdd9a4c4d1",
          "message": "Merge pull request #897 from containerd/dependabot/github_actions/peaceiris/actions-gh-pages-4\n\nchore(deps): bump peaceiris/actions-gh-pages from 3 to 4",
          "timestamp": "2025-03-07T19:44:06Z",
          "url": "https://github.com/z63d/runwasi/commit/07ea10e67274338589bf32d3942647bdd9a4c4d1"
        },
        "date": 1741566676359,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20845.8666,
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
        "date": 1741048432448,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.8,
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
        "date": 1741134914652,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.7,
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
        "date": 1741221313548,
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
        "date": 1741307639942,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.4,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07ea10e67274338589bf32d3942647bdd9a4c4d1",
          "message": "Merge pull request #897 from containerd/dependabot/github_actions/peaceiris/actions-gh-pages-4\n\nchore(deps): bump peaceiris/actions-gh-pages from 3 to 4",
          "timestamp": "2025-03-07T19:44:06Z",
          "url": "https://github.com/z63d/runwasi/commit/07ea10e67274338589bf32d3942647bdd9a4c4d1"
        },
        "date": 1741394413179,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07ea10e67274338589bf32d3942647bdd9a4c4d1",
          "message": "Merge pull request #897 from containerd/dependabot/github_actions/peaceiris/actions-gh-pages-4\n\nchore(deps): bump peaceiris/actions-gh-pages from 3 to 4",
          "timestamp": "2025-03-07T19:44:06Z",
          "url": "https://github.com/z63d/runwasi/commit/07ea10e67274338589bf32d3942647bdd9a4c4d1"
        },
        "date": 1741480261505,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.7,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07ea10e67274338589bf32d3942647bdd9a4c4d1",
          "message": "Merge pull request #897 from containerd/dependabot/github_actions/peaceiris/actions-gh-pages-4\n\nchore(deps): bump peaceiris/actions-gh-pages from 3 to 4",
          "timestamp": "2025-03-07T19:44:06Z",
          "url": "https://github.com/z63d/runwasi/commit/07ea10e67274338589bf32d3942647bdd9a4c4d1"
        },
        "date": 1741566678844,
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
        "date": 1741048956423,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.3355134441687,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 479ms 692us 184ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.4078720194907,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 466ms 587us 431ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.640940171503338,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 301ms 624us 642ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.251754554458284,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 566ms 226us 917ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.867136995532604,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 408ms 122us 698ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.31104175661046,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 991ms 277us 833ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.579197192266005,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 642ms 55us 995ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.85694552914322,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 990ms 348us 225ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.65910867694825,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 713ms 85us 831ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.73493638762885,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 203ms 945us 863ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.251394457706716,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 533ms 181us 205ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.319769200507636,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 275ms 376us 368ns"
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
        "date": 1741135353796,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.62664585665746,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 752ms 444us 253ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.85909711470065,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 886ms 926us 344ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.650908852719462,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 255ms 151us 271ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.194004586790413,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 815ms 433us 600ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.35951845463931,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 766ms 940us 297ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.74842997769407,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 615ms 219us 383ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.402490710958215,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 612ms 997us 59ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.28910881087482,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 765ms 426us 50ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.88395293247304,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 676ms 849us 509ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.4708177882635,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 798ms 657us 591ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.187128245651916,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 777ms 480us 528ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.042790543001203,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 333ms 295us 278ns"
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
        "date": 1741221824242,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.05608331233566,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 586ms 304us 611ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.14829968837533,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 663ms 818us 454ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.79914665130981,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 571ms 463us 650ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.199574790910292,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 791ms 314us 149ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.80845405623535,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 449ms 111us 51ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.01231674896827,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 319ms 653us 673ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.577073482729537,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 653ms 574us 997ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.18093444336513,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 488ms 346us 592ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.46935462463948,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 583ms 466us 982ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 71.7397243893268,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 939ms 278us 531ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.371271703717042,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 82ms 609us 714ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.000790347902683,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 496ms 912us 856ns"
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
        "date": 1741308151484,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.277254898249204,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 128ms 777us 935ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.106459204754145,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 695ms 875us 531ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.934568320403132,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 958ms 748us 224ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.181733523975499,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 868ms 630us 774ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.72673499637209,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 506ms 401us 895ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.530118295621804,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 754ms 540us 625ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.769066551778561,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 626ms 564us 498ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.02356018654506,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 849ms 633us 202ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 81.59959219709468,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 254ms 963us 206ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.25876725661416,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 466ms 423us 386ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.55362603603895,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 409ms 725us 206ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.418488192575563,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 906ms 947us 599ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07ea10e67274338589bf32d3942647bdd9a4c4d1",
          "message": "Merge pull request #897 from containerd/dependabot/github_actions/peaceiris/actions-gh-pages-4\n\nchore(deps): bump peaceiris/actions-gh-pages from 3 to 4",
          "timestamp": "2025-03-07T19:44:06Z",
          "url": "https://github.com/z63d/runwasi/commit/07ea10e67274338589bf32d3942647bdd9a4c4d1"
        },
        "date": 1741394877744,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 49.679868091755026,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 128ms 877us 922ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 33.729706323311795,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 29s 647ms 456us 471ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.317776509321348,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 843ms 246us 914ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.820011503663727,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 476ms 330us 889ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.44895842620627,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 435ms 626us 234ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 28.639137636304948,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 917ms 252us 492ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.036642728230317,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 16s 706ms 865us 475ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 53.46275921998344,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 704ms 608us 864ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 76.06028658246386,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 147ms 465us 582ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 71.788005372293,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 929ms 903us 677ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.112614360079203,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 63ms 174us 706ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.776086767546307,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 3s 387ms 75us 308ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07ea10e67274338589bf32d3942647bdd9a4c4d1",
          "message": "Merge pull request #897 from containerd/dependabot/github_actions/peaceiris/actions-gh-pages-4\n\nchore(deps): bump peaceiris/actions-gh-pages from 3 to 4",
          "timestamp": "2025-03-07T19:44:06Z",
          "url": "https://github.com/z63d/runwasi/commit/07ea10e67274338589bf32d3942647bdd9a4c4d1"
        },
        "date": 1741480799267,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.70361708989627,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 341ms 6us 612ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.162775088369976,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 652ms 745us 55ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.849059820185566,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 344ms 331us 29ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.136113500130518,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 67ms 157us 860ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.06679240400756,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 269ms 615us 506ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.57050280512795,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 711ms 270us 939ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.73170561975364,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 824ms 165us 307ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.723276093879086,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 945ms 822us 107ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 81.91394584547939,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 207ms 933us 456ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.26739770511111,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 464ms 858us 483ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.62246646449971,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 159ms 543us 840ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.32914012774011,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 240ms 211us 804ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07ea10e67274338589bf32d3942647bdd9a4c4d1",
          "message": "Merge pull request #897 from containerd/dependabot/github_actions/peaceiris/actions-gh-pages-4\n\nchore(deps): bump peaceiris/actions-gh-pages from 3 to 4",
          "timestamp": "2025-03-07T19:44:06Z",
          "url": "https://github.com/z63d/runwasi/commit/07ea10e67274338589bf32d3942647bdd9a4c4d1"
        },
        "date": 1741567214055,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.94986476084701,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 249ms 328us 263ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.09009566865453,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 708ms 433us 61ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.819239011682217,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 479ms 848us 271ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.090548845793112,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 266ms 642us 136ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.069952262090474,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 267ms 435us 92ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.51266242967385,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 773ms 279us 38ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.540980949444872,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 849ms 893us 426ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.72788110710455,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 628ms 16us 74ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.38586525289449,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 439ms 997us 963ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 76.94974610689053,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 995ms 494us 470ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.497208853417852,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 616ms 314us 486ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.235638421108472,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 592ms 896us 692ns"
          }
        ]
      }
    ]
  }
}