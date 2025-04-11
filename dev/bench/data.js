window.BENCHMARK_DATA = {
  "lastUpdate": 1744331839720,
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
        "date": 1741653264656,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15532,
            "unit": "kB",
            "extra": "shim: 12672 kB\nzygote: 2860 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66096,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12464 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18952,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3592 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19652,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3396 kB"
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
        "date": 1741653378061,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140717487,
            "range": "± 3125294",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 85804919,
            "range": "± 1772759",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 116863968,
            "range": "± 1382436",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 125285695,
            "range": "± 1153875",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135403355,
            "range": "± 2095024",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 138442436,
            "range": "± 1441809",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84753425,
            "range": "± 831121",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86403089,
            "range": "± 1592597",
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
        "date": 1741739635802,
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
            "extra": "shim: 53376 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18696,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3464 kB"
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
        "date": 1741739754817,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140797077,
            "range": "± 1870429",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82964874,
            "range": "± 992547",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 116245608,
            "range": "± 1536940",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 122538995,
            "range": "± 2220848",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132330345,
            "range": "± 2561546",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133520525,
            "range": "± 932623",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82970605,
            "range": "± 2820364",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83169777,
            "range": "± 879400",
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
        "date": 1741826088474,
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
            "value": 18940,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3708 kB"
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
        "date": 1741826207098,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141542031,
            "range": "± 3331278",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 85785681,
            "range": "± 1482817",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113795314,
            "range": "± 1763249",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 122595291,
            "range": "± 2435577",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135420884,
            "range": "± 2353704",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135614098,
            "range": "± 1473684",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 85241022,
            "range": "± 2831807",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85693862,
            "range": "± 1863097",
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
        "date": 1741912498126,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15272,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66256,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12752 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18952,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3592 kB"
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
        "date": 1741912604666,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138029264,
            "range": "± 1494931",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82169718,
            "range": "± 1006482",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111602785,
            "range": "± 1685349",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119365508,
            "range": "± 1937756",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133042042,
            "range": "± 2886110",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135044641,
            "range": "± 2979479",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82698606,
            "range": "± 2001284",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84396856,
            "range": "± 916801",
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
        "date": 1741998863446,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15272,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66512,
            "unit": "kB",
            "extra": "shim: 53888 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18692,
            "unit": "kB",
            "extra": "shim: 15104 kB\nzygote: 3588 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19908,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3652 kB"
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
        "date": 1741998972579,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135668273,
            "range": "± 2257539",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81531798,
            "range": "± 905524",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111283014,
            "range": "± 902855",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119038639,
            "range": "± 1723794",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131636196,
            "range": "± 3617574",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133970445,
            "range": "± 1874931",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82051729,
            "range": "± 2925620",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83445534,
            "range": "± 783599",
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
        "date": 1742085437828,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15272,
            "unit": "kB",
            "extra": "shim: 12416 kB\nzygote: 2856 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66128,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19080,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3592 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19780,
            "unit": "kB",
            "extra": "shim: 16128 kB\nzygote: 3652 kB"
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
        "date": 1742085614518,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139801337,
            "range": "± 3299432",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84737352,
            "range": "± 1593866",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113307661,
            "range": "± 1635461",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121090006,
            "range": "± 1285336",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132941845,
            "range": "± 2625871",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135865749,
            "range": "± 1830726",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83498123,
            "range": "± 1268049",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85715627,
            "range": "± 1155654",
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
        "date": 1742171762513,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15532,
            "unit": "kB",
            "extra": "shim: 12544 kB\nzygote: 2988 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66640,
            "unit": "kB",
            "extra": "shim: 53888 kB\nzygote: 12752 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18952,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3592 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19652,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3396 kB"
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
        "date": 1742171905798,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 144234701,
            "range": "± 4043939",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82955496,
            "range": "± 2240972",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113182407,
            "range": "± 1593946",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 118703355,
            "range": "± 1726236",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133164827,
            "range": "± 3859552",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134074405,
            "range": "± 1506259",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83439307,
            "range": "± 2420261",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84558402,
            "range": "± 692513",
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
        "date": 1742258075887,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15272,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65872,
            "unit": "kB",
            "extra": "shim: 53248 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18692,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3460 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19908,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3652 kB"
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
        "date": 1742258197177,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137235250,
            "range": "± 1951774",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82780852,
            "range": "± 1360357",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113882034,
            "range": "± 3268347",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120412611,
            "range": "± 1623563",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131041871,
            "range": "± 2979337",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134728345,
            "range": "± 2544429",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81829628,
            "range": "± 2357279",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83975931,
            "range": "± 1001485",
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
        "date": 1742344483803,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15656,
            "unit": "kB",
            "extra": "shim: 12672 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66256,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12752 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18876,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3516 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19776,
            "unit": "kB",
            "extra": "shim: 16384 kB\nzygote: 3392 kB"
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
        "date": 1742344581679,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 132123036,
            "range": "± 2933493",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 77713993,
            "range": "± 1477368",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 107643994,
            "range": "± 1646169",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 114600706,
            "range": "± 1517212",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 128048082,
            "range": "± 2315673",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 129266249,
            "range": "± 1718571",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80375217,
            "range": "± 1294491",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 80368870,
            "range": "± 1503049",
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
        "date": 1742431584470,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15656,
            "unit": "kB",
            "extra": "shim: 12672 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66000,
            "unit": "kB",
            "extra": "shim: 53376 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19080,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3592 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19652,
            "unit": "kB",
            "extra": "shim: 16128 kB\nzygote: 3524 kB"
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
        "date": 1742431792900,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139784712,
            "range": "± 1774120",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84400274,
            "range": "± 4365154",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112279377,
            "range": "± 2254159",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 124824927,
            "range": "± 2835526",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133730669,
            "range": "± 3162244",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135512430,
            "range": "± 2116833",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83171337,
            "range": "± 2540237",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83749864,
            "range": "± 717564",
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
        "date": 1742517269044,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15272,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65872,
            "unit": "kB",
            "extra": "shim: 53248 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19080,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3592 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19780,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3524 kB"
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
        "date": 1742517387126,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138240648,
            "range": "± 4326517",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83468432,
            "range": "± 1079254",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113693997,
            "range": "± 2354081",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120025548,
            "range": "± 804756",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133962131,
            "range": "± 4011755",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135241087,
            "range": "± 2109310",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83415484,
            "range": "± 2469744",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84840676,
            "range": "± 36418589",
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
        "date": 1742603652486,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15272,
            "unit": "kB",
            "extra": "shim: 12416 kB\nzygote: 2856 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66528,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12768 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18824,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3592 kB"
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
        "date": 1742603749821,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135457641,
            "range": "± 3325238",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80146298,
            "range": "± 802031",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 109144701,
            "range": "± 1065690",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 117327481,
            "range": "± 1121697",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 129469540,
            "range": "± 2542783",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132305718,
            "range": "± 1354509",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80888594,
            "range": "± 997427",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 81800158,
            "range": "± 1462447",
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
        "date": 1742690327198,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15272,
            "unit": "kB",
            "extra": "shim: 12416 kB\nzygote: 2856 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66384,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19212,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3596 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19268,
            "unit": "kB",
            "extra": "shim: 15872 kB\nzygote: 3396 kB"
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
        "date": 1742690362740,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138042048,
            "range": "± 2889201",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84270837,
            "range": "± 997899",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112695990,
            "range": "± 1849256",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 122118914,
            "range": "± 1632389",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134341185,
            "range": "± 3745212",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134515139,
            "range": "± 925154",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83489797,
            "range": "± 3377147",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85016120,
            "range": "± 1670109",
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
        "date": 1742776682226,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15656,
            "unit": "kB",
            "extra": "shim: 12672 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65588,
            "unit": "kB",
            "extra": "shim: 52992 kB\nzygote: 12596 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18952,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3592 kB"
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
        "date": 1742776689405,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137231900,
            "range": "± 2610211",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83845555,
            "range": "± 1053412",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114240373,
            "range": "± 2317653",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 122959822,
            "range": "± 2105028",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132928115,
            "range": "± 4581147",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 137236126,
            "range": "± 1585549",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84347166,
            "range": "± 1549427",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86423614,
            "range": "± 1248671",
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
        "date": 1742862905457,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14948,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2916 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66256,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18948,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3716 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19520,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3520 kB"
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
        "date": 1742863042624,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139022673,
            "range": "± 4087349",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 85812773,
            "range": "± 1594612",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115325399,
            "range": "± 1648642",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 123564736,
            "range": "± 1408700",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 137948139,
            "range": "± 2719301",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 138263464,
            "range": "± 1649869",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 85052439,
            "range": "± 3051815",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 88009022,
            "range": "± 2022274",
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
        "date": 1742949300256,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15528,
            "unit": "kB",
            "extra": "shim: 12672 kB\nzygote: 2856 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66256,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18880,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3648 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 20036,
            "unit": "kB",
            "extra": "shim: 16512 kB\nzygote: 3524 kB"
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
        "date": 1742949440897,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 146319554,
            "range": "± 2467487",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 92713845,
            "range": "± 1813853",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 126757059,
            "range": "± 2939771",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 134740772,
            "range": "± 1466205",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 137515488,
            "range": "± 3861904",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 140913528,
            "range": "± 2286349",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 86839098,
            "range": "± 2819764",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 89906015,
            "range": "± 1137303",
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
        "date": 1743035708318,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15656,
            "unit": "kB",
            "extra": "shim: 12672 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66560,
            "unit": "kB",
            "extra": "shim: 53888 kB\nzygote: 12672 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18948,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3588 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19392,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3392 kB"
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
        "date": 1743035869389,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138417250,
            "range": "± 3995589",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83504806,
            "range": "± 831518",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113594891,
            "range": "± 2009485",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121574147,
            "range": "± 1177065",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133136287,
            "range": "± 3156421",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 136076700,
            "range": "± 1961609",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82997073,
            "range": "± 2596271",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86833793,
            "range": "± 1258030",
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
        "date": 1743122094177,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15656,
            "unit": "kB",
            "extra": "shim: 12800 kB\nzygote: 2856 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66272,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12640 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19332,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3716 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19904,
            "unit": "kB",
            "extra": "shim: 16384 kB\nzygote: 3520 kB"
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
        "date": 1743122185201,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139423043,
            "range": "± 2154144",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83494730,
            "range": "± 1042275",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112572770,
            "range": "± 2439887",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119588068,
            "range": "± 1413353",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134271150,
            "range": "± 3812357",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135761225,
            "range": "± 1373151",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83253465,
            "range": "± 1305691",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85069803,
            "range": "± 1031763",
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
        "date": 1743208470326,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15656,
            "unit": "kB",
            "extra": "shim: 12672 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66128,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19076,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3716 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19960,
            "unit": "kB",
            "extra": "shim: 16384 kB\nzygote: 3576 kB"
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
        "date": 1743208580149,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137859073,
            "range": "± 3028244",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82418239,
            "range": "± 1236376",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112828122,
            "range": "± 1686672",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120764043,
            "range": "± 1459454",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 130691278,
            "range": "± 2525095",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135485313,
            "range": "± 826171",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81968657,
            "range": "± 1913739",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84548643,
            "range": "± 911535",
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
        "date": 1743295132755,
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
            "value": 65872,
            "unit": "kB",
            "extra": "shim: 53248 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18696,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3464 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19776,
            "unit": "kB",
            "extra": "shim: 16128 kB\nzygote: 3648 kB"
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
        "date": 1743295275939,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 145900159,
            "range": "± 3071385",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 92345860,
            "range": "± 3070062",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 125445021,
            "range": "± 2836864",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 135458794,
            "range": "± 2579242",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 144003365,
            "range": "± 3750213",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 148018592,
            "range": "± 2093384",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 88881569,
            "range": "± 1581615",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 92390611,
            "range": "± 2883401",
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
        "date": 1743381508485,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15016,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66384,
            "unit": "kB",
            "extra": "shim: 53888 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19076,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3588 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19780,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3524 kB"
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
        "date": 1743381557982,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141543472,
            "range": "± 3464240",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 85084422,
            "range": "± 677084",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 116539870,
            "range": "± 1326835",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 123229814,
            "range": "± 2922643",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133181793,
            "range": "± 2187379",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 137849196,
            "range": "± 1259939",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83914644,
            "range": "± 2309384",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86930860,
            "range": "± 948386",
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
        "date": 1743467992484,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15008,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2976 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66128,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18952,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3592 kB"
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
        "date": 1743468116156,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135959905,
            "range": "± 2587296",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81772636,
            "range": "± 1219277",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 110889513,
            "range": "± 1427527",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 118406034,
            "range": "± 1522362",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 129699779,
            "range": "± 4504318",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132642165,
            "range": "± 1199897",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82456510,
            "range": "± 2650596",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85677867,
            "range": "± 1843118",
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
        "date": 1743554177634,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15532,
            "unit": "kB",
            "extra": "shim: 12544 kB\nzygote: 2988 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66512,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12752 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18824,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3592 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19524,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3524 kB"
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
        "date": 1743554313630,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141995902,
            "range": "± 4071189",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 86215173,
            "range": "± 3060137",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 116373275,
            "range": "± 2080018",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 124340188,
            "range": "± 1865532",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135383841,
            "range": "± 3583724",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 137169075,
            "range": "± 1471732",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83019405,
            "range": "± 1604275",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 87054004,
            "range": "± 1188547",
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
        "date": 1743640542209,
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
            "value": 18696,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3464 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19648,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3648 kB"
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
        "date": 1743640683752,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140828894,
            "range": "± 2749600",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 87521624,
            "range": "± 1685592",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 118644088,
            "range": "± 7065909",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 126234844,
            "range": "± 1278875",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134416111,
            "range": "± 1697764",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 137023096,
            "range": "± 1535768",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84636266,
            "range": "± 1824664",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 87338635,
            "range": "± 1606361",
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
        "date": 1743726942928,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15144,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 3112 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66640,
            "unit": "kB",
            "extra": "shim: 54016 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18824,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3592 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19780,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3524 kB"
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
        "date": 1743727011209,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139188672,
            "range": "± 3070009",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84429228,
            "range": "± 1172287",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112248778,
            "range": "± 1272741",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120273512,
            "range": "± 1899145",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132826416,
            "range": "± 3718763",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134261947,
            "range": "± 1551982",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 85521007,
            "range": "± 1382749",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84663002,
            "range": "± 2308477",
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
        "date": 1743813251361,
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
            "value": 65872,
            "unit": "kB",
            "extra": "shim: 53248 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19076,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3716 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19580,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3324 kB"
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
        "date": 1743813360869,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137271747,
            "range": "± 4017567",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80276771,
            "range": "± 834484",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 109993828,
            "range": "± 2596726",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 117171920,
            "range": "± 1762897",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 130806292,
            "range": "± 2591447",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132934540,
            "range": "± 1568715",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80890080,
            "range": "± 1356866",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 81935692,
            "range": "± 1020993",
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
        "date": 1743899853603,
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
            "value": 66528,
            "unit": "kB",
            "extra": "shim: 53888 kB\nzygote: 12640 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18692,
            "unit": "kB",
            "extra": "shim: 15104 kB\nzygote: 3588 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19652,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3396 kB"
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
        "date": 1743899984445,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137226571,
            "range": "± 2933701",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83055752,
            "range": "± 1679016",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113288127,
            "range": "± 1952101",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119065778,
            "range": "± 2123341",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131124174,
            "range": "± 1726259",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134519792,
            "range": "± 1765215",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83913844,
            "range": "± 1695841",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83972854,
            "range": "± 817436",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1743986780127,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15396,
            "unit": "kB",
            "extra": "shim: 12544 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66128,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18816,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3584 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18996,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3380 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1743986894485,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137537197,
            "range": "± 2696110",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 79129984,
            "range": "± 578231",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 110974296,
            "range": "± 1647246",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 116942210,
            "range": "± 752779",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 129681115,
            "range": "± 5061057",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 130039315,
            "range": "± 1189507",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81914598,
            "range": "± 2024304",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 81292473,
            "range": "± 1239369",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744072502655,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15064,
            "unit": "kB",
            "extra": "shim: 12160 kB\nzygote: 2904 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66512,
            "unit": "kB",
            "extra": "shim: 54016 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18692,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3460 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19640,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3384 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744072624115,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137969200,
            "range": "± 2178192",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82618297,
            "range": "± 1127093",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115047227,
            "range": "± 1785490",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 122226125,
            "range": "± 1730940",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132866184,
            "range": "± 1930151",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135422522,
            "range": "± 3141721",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82690880,
            "range": "± 1749221",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83677553,
            "range": "± 906874",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744158915417,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15140,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66640,
            "unit": "kB",
            "extra": "shim: 54016 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18564,
            "unit": "kB",
            "extra": "shim: 15104 kB\nzygote: 3460 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19252,
            "unit": "kB",
            "extra": "shim: 15872 kB\nzygote: 3380 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744159026863,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136060481,
            "range": "± 3762329",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81506788,
            "range": "± 875461",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113373744,
            "range": "± 1444670",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120588553,
            "range": "± 2628775",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131359456,
            "range": "± 2320025",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133843542,
            "range": "± 1722684",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82160683,
            "range": "± 1958059",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85203233,
            "range": "± 1248949",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744245305394,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15140,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66640,
            "unit": "kB",
            "extra": "shim: 54144 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18560,
            "unit": "kB",
            "extra": "shim: 14976 kB\nzygote: 3584 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19508,
            "unit": "kB",
            "extra": "shim: 16128 kB\nzygote: 3380 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744245424216,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139912049,
            "range": "± 2933584",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 85294323,
            "range": "± 772351",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 117950844,
            "range": "± 920347",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 125630679,
            "range": "± 1251936",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134293564,
            "range": "± 2913116",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 136091560,
            "range": "± 1684457",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 85204295,
            "range": "± 1622226",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84743342,
            "range": "± 955827",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744331756641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15140,
            "unit": "kB",
            "extra": "shim: 12160 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66256,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18432,
            "unit": "kB",
            "extra": "shim: 14976 kB\nzygote: 3456 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19636,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3380 kB"
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
        "date": 1741653275638,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20956.8149,
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
        "date": 1741739654922,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20684.2903,
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
        "date": 1741826090087,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20127.312,
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
        "date": 1741912504694,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20307.4523,
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
        "date": 1741998863839,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20506.7754,
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
        "date": 1742085520182,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20461.9196,
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
        "date": 1742171812592,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20591.2456,
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
        "date": 1742258089788,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20528.7064,
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
        "date": 1742344555086,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20165.4655,
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
        "date": 1742431726056,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20079.9441,
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
        "date": 1742517283958,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20697.5866,
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
        "date": 1742603704618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20279.7331,
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
        "date": 1742690571182,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19220.1794,
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
        "date": 1742776645150,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19507.4651,
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
        "date": 1742862934273,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20538.8479,
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
        "date": 1742949277772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20593.3135,
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
        "date": 1743035698490,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20102.7295,
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
        "date": 1743122078658,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19419.4934,
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
        "date": 1743208478331,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20374.2045,
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
        "date": 1743295167152,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19417.5797,
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
        "date": 1743381447675,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20468.4063,
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
        "date": 1743468084047,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20629.5025,
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
        "date": 1743554137869,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20148.361,
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
        "date": 1743640499964,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19945.6385,
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
        "date": 1743726964766,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20856.7975,
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
        "date": 1743813266943,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20678.2662,
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
        "date": 1743899945371,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20696.9499,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1743986819336,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20399.1068,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744072519354,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20183.3347,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744158973776,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20046.0045,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744245311074,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20949.2684,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744331836518,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20637.7437,
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
        "date": 1741653288454,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.2,
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
        "date": 1741739657407,
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
        "date": 1741826092732,
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
        "date": 1741912506130,
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
        "date": 1741998867286,
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
        "date": 1742085521551,
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
        "date": 1742171815054,
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
        "date": 1742258092356,
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
        "date": 1742344556464,
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
        "date": 1742431728421,
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
        "date": 1742517286031,
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
        "date": 1742603707168,
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
        "date": 1742690572727,
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
        "date": 1742776647630,
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
        "date": 1742862936992,
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
        "date": 1742949279245,
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
        "date": 1743035700206,
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
        "date": 1743122080074,
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
        "date": 1743208479783,
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
        "date": 1743295169487,
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
        "date": 1743381449756,
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
        "date": 1743468086798,
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
        "date": 1743554139271,
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
        "date": 1743640501659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.6,
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
        "date": 1743726966284,
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
        "date": 1743813268394,
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
        "date": 1743899947119,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1743986821938,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744072521848,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744158976417,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744245312963,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.2,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744331839084,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.4,
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
        "date": 1741653789575,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.83855148532543,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 290ms 662us 477ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.278472371389704,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 564ms 556us 461ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.826589569476328,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 446ms 393us 880ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.005244255365165,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 643ms 367us 11ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.88855159492424,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 393ms 196us 834ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.104794938392995,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 217ms 299us 837ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.661528464524586,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 198ms 251us 762ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.6260986980888,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 977ms 173us 7ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 81.46801707220791,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 274ms 755us 615ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 76.27470966776968,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 110ms 505us 492ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.45425991489084,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 774ms 535us 298ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.311426394916932,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 306ms 716us 886ns"
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
        "date": 1741740196685,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.64950161742586,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 743ms 530us 895ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.41812922090245,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 234ms 128us 171ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.636204972313529,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 323ms 722us 23ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.151165275526658,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 1ms 524us 95ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.94147788104339,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 69ms 842us 826ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.46691758712721,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 936ms 362us 602ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.430308088418174,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 458ms 455us 712ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 54.34766235280898,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 400ms 55us 434ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.11301044400864,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 482ms 367us 27ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.85989090590697,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 539ms 148us 78ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.213163082261122,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 678ms 279us 243ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.12495122848864,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 15ms 691us 448ns"
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
        "date": 1741826650560,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.76261044554216,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 699ms 538us 523ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.62999413683551,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 876ms 701us 395ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.419088424020073,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 352ms 511us 795ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.782500896822398,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 647ms 552us 128ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.082981104979105,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 966ms 548us 271ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.052954084340737,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 419ms 907us 769ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.343419642922205,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 943ms 307us 395ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 53.753288985157695,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 603ms 512us 806ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.64269674282865,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 879ms 511us 428ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.42950572664815,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 806ms 528us 16ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.080868987625006,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 185ms 694us 117ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.029498263405003,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 384ms 984us 456ns"
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
        "date": 1741912975812,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.982846207967725,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 614ms 440us 432ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.72223505342083,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 993ms 769us 105ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.645874395676325,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 278ms 613us 689ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.082541877167026,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 301ms 821us 546ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.22084616569911,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 866ms 664us 867ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.462003954524402,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 942ms 22us 462ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.44701838231233,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 365ms 927us 938ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.22273528139372,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 786ms 398us 954ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.85931294724499,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 522ms 21us 78ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.25767246929145,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 650ms 447us 336ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.340685449422097,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 196ms 943us 243ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.222302019044516,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 643ms 532us 393ns"
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
        "date": 1741999490113,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 49.4567068216901,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 219ms 704us 551ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.11597334907869,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 29s 311ms 782us 776ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.114966361748605,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 846ms 785us 913ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.564752632536518,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 658ms 907us 242ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 35.725763780815385,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 991ms 4us 87ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 28.774173212769252,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 753ms 387us 790ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 12.982231196442893,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 17s 28ms 361us 679ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 52.056291567503536,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 19s 209ms 973us 855ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 76.80080343913274,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 20ms 697us 118ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 70.24232569521692,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 14s 236ms 430us 672ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.856455919756879,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 3s 65ms 795us 97ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.858567503706828,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 3s 57ms 397us 824ns"
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
        "date": 1742085970438,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.31077777097171,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 489ms 82us 868ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.029309399026786,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 755ms 180us 898ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.81911206224788,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 480ms 426us 344ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.166594497650188,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 934ms 379us 676ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.57083319775444,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 616ms 391us 357ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.901194616300845,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 443ms 479us 862ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.662980894053891,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 190ms 470us 495ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.868404254996044,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 899ms 204us 628ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 82.01729045884866,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 192ms 551us 39ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.74547766366958,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 560ms 153us 540ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.563455563790114,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 373ms 875us 255ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.276715338032076,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 437ms 457us 81ns"
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
        "date": 1742172316966,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.274492118384394,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 890ms 802us 629ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.81743155873023,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 721ms 245us 515ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.52310453092129,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 855ms 801us 311ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.947732738942289,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 899ms 777us 877ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.373340446814176,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 492ms 663us 245ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.23953742184905,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 200ms 267us 452ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.400370083495986,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 624ms 804us 671ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 54.68291170939252,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 287ms 248us 589ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.67052906929757,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 711ms 240us 306ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.72059395037692,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 564ms 730us 646ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.17471020920163,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 824ms 909us 817ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.140411275608717,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 956ms 289us 894ns"
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
        "date": 1742258637600,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 49.85525343793348,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 58ms 66us 724ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.097262726722306,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 492ms 250us 458ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.492315141391119,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 2ms 87us 675ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.802175264110353,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 557ms 638us 128ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.7312292965505,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 224ms 789us 890ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.033580598058634,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 442ms 875us 436ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.350120180648137,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 905ms 692us 718ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.02862274796943,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 172ms 361us 38ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.26133318671626,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 777ms 702us 82ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.4643450424004,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 799ms 890us 131ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.188894855510966,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 770ms 739us 73ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.059010950903545,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 270ms 335us 518ns"
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
        "date": 1742345097756,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.00553265963872,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 997ms 787us 181ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.67259595804872,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 841ms 220us 923ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.509121421942092,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 922ms 160us 820ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.797552219702563,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 578ms 744us 454ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.554246498770176,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 356ms 602us 742ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.174839534933362,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 276ms 109us 687ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.352117546804259,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 894ms 487us 447ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.255487411003095,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 97ms 750us 49ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.4999520835115,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 738ms 861us 279ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.20589007985275,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 849ms 285us 687ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.27994622178226,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 425ms 264us 333ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.20130127199284,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 723ms 437us 100ns"
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
        "date": 1742432156479,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.07279431506766,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 203ms 885us 890ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.96554214000416,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 804ms 391us 106ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.774373861986973,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 684ms 763us 452ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.072249591222075,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 347ms 96us 626ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.13992748953541,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 219ms 242us 296ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.946954007753458,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 392ms 377us 727ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.622344596893893,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 408ms 802us 199ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.53567048050177,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 687ms 948us 7ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.73243023018456,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 541ms 948us 77ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.54591195442647,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 414ms 551us 835ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.533656240762944,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 482ms 689us 699ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.370912427124235,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 83ms 950us 235ns"
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
        "date": 1742517885312,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.80364004469798,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 683ms 628us 951ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.65354150610103,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 47ms 704us 597ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.642349823662743,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 295ms 49us 90ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.008895745792696,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 627ms 153us 452ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.07219122842701,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 974ms 396us 896ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.071617340243414,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 253ms 948us 23ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.468358944027129,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 248ms 95us 418ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.74897661132555,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 937ms 549us 6ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.20612005890155,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 467ms 876us 507ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.7761587205618,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 554ms 514us 322ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.362995065609766,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 113ms 506us 176ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.19067386059383,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 763ms 951us 804ns"
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
        "date": 1742604165937,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.16231207733847,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 545ms 637us 392ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.459355419916605,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 201ms 302us 256ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.620405174292946,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 397ms 557us 255ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.08066204649831,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 310ms 86us 183ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.17718207442131,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 898ms 219us 397ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.6800805040984,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 692ms 630us 984ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.484359622995255,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 159ms 991us 869ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.18267289287438,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 121ms 630us 352ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.01001700214977,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 656ms 623us 20ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.49190173453992,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 246ms 453us 951ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.341827542801003,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 192ms 666us 327ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.294820653415478,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 369ms 193us 394ns"
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
        "date": 1742690780496,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.421587245160936,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 447ms 85us 428ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.652582659145885,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 48ms 458us 917ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.562726829548252,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 668ms 458us 298ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.865936592179843,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 267ms 877us 392ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.795497757129596,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 458ms 177us 808ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.921613320579798,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 420ms 657us 813ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.37370674247571,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 773ms 585us 159ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 54.55337653584955,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 330ms 671us 51ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.59093202619384,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 564ms 245us 380ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.74818395830972,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 201ms 636us 630ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.149394302878747,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 921ms 826us 989ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.17494257904038,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 824ms 21us 638ns"
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
        "date": 1742777134492,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.94874675200013,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 627ms 568us 169ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.67228873003785,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 32ms 964us 399ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.793562109314557,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 596ms 971us 751ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.216430581129988,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 718ms 434us 732ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.28714580290147,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 818ms 893us 709ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.553590753769967,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 836ms 835us 880ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.605994847383327,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 497ms 14us 457ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.293236677653816,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 764ms 123us 348ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.97994635614754,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 661ms 441us 874ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.72080021746042,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 383ms 154us 317ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.44192825564188,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 820ms 116us 987ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.28152425796152,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 419ms 310us 880ns"
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
        "date": 1742863439529,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.34069934917688,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 864ms 642us 584ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.283395974843565,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 341ms 943us 69ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.65926851922741,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 216ms 227us 753ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.121339903261925,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 131ms 705us 682ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.305422362188494,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 805ms 754us 678ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.658667278687737,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 716ms 956us 686ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.480900806664003,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 179ms 19us 217ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 54.25302575914425,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 432ms 151us 682ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.94401183062209,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 829ms 721us 957ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.80646076970416,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 548ms 949us 368ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.439822927637195,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 827ms 905us 775ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.220971837688253,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 648ms 587us 397ns"
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
        "date": 1742949836201,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 48.70707737458646,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 530ms 897us 231ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 33.644734974892415,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 29s 722ms 332us 506ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 13.992331460654055,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 467ms 718us 72ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.297303028204672,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 943ms 261us 189ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 35.816715307143205,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 919ms 924us 857ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 27.900691134518166,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 35s 841ms 406us 49ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 12.791044558533807,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 18s 179ms 697us 946ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 51.22673988217865,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 19s 521ms 54us 869ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 75.26010205858674,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 287ms 252us 776ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 69.31301587626051,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 14s 427ms 304us 704ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.697511436828405,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 3s 704ms 365us 117ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.767167802461861,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 3s 422ms 931us 279ns"
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
        "date": 1743036205115,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 49.98997161177491,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 4ms 12us 160ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.27953013121774,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 345ms 48us 709ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.498283479257804,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 973ms 682us 397ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.882840817450418,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 191ms 473us 205ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.324859953113034,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 791ms 795us 100ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.573055787704067,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 814ms 564us 419ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.47932921766293,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 187ms 667us 936ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.510754780584286,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 14ms 527us 166ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.11885720910585,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 801ms 6us 514ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.68330910975624,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 758ms 316us 899ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.34328211272238,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 187ms 220us 113ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.075687679537822,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 205ms 737us 7ns"
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
        "date": 1743122605595,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.86503597748263,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 659ms 870us 101ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.573749810292355,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 110ms 615us 421ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.641088522716135,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 300ms 932us 574ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.941741589898054,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 926ms 602us 497ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.20426990921991,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 878ms 635us 233ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.85283739397258,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 497ms 653us 399ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.457622167684779,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 307ms 332us 123ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 54.80543853905858,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 246ms 364us 351ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.40240130428532,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 594ms 77us 554ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.71726753221522,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 383ms 787us 82ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.33827941081828,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 205ms 955us 343ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.0926802765117,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 140ms 52us 671ns"
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
        "date": 1743208990332,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.19188597893796,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 534ms 345us 744ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.61050154398469,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 81ms 603us 927ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.708975101197785,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 985ms 702us 139ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.168002919610979,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 928ms 257us 352ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.30203391883941,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 808ms 189us 660ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.011065103412374,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 321ms 43us 307ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.59211734897176,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 572ms 54us 620ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.839531962513476,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 908ms 459us 560ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.43453029882848,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 588ms 983us 610ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.36233567019069,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 269ms 227us 806ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.499680860310104,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 607ms 232us 859ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.332719401747443,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 226ms 791us 167ns"
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
        "date": 1743295852064,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 48.304683400446805,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 701ms 926us 389ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.59890541143832,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 902ms 648us 454ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.41801421379847,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 357ms 678us 885ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.108180376283714,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 189ms 307us 719ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 35.81136138005237,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 924ms 98us 986ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 28.60131871541331,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 963ms 422us 839ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.285701319340491,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 268ms 890us 664ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 54.78523745212789,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 253ms 92us 375ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.1699030950911,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 958ms 419us 797ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 71.58758100672055,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 968ms 903us 348ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.214927585857616,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 671ms 567us 431ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.97056342111998,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 615ms 198us 577ns"
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
        "date": 1743381947890,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.73631681432952,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 328ms 782us 209ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.832620621165454,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 907ms 531us 815ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.777376921479325,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 671ms 8us 550ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.162582052972542,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 951ms 827us 763ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.868187646442564,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 407ms 390us 6ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.168063378916244,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 147ms 636us 540ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.607032459079084,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 491ms 409us 902ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.742770160661614,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 939ms 546us 189ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.71050419558266,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 389ms 961us 9ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.68400986220138,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 212ms 830us 581ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.566795676418135,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 361ms 702us 983ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.407091437556193,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 949ms 255us 10ns"
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
        "date": 1743468527956,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.85269890188423,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 664ms 639us 667ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.358945483990915,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 281ms 386us 402ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.70355338554873,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 10ms 770us 851ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.42344177208039,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 331ms 579us 508ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.40902728906136,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 731ms 515us 692ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.599859884090463,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 783ms 943us 705ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.518290584205209,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 973ms 850us 5ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 51.631637526311806,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 19s 367ms 969us 871ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.8056939039776,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 530ms 434us 247ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.00371036792366,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 332ms 673us 745ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.3857812585919,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 28ms 521us 266ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.11316675224459,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 61ms 47us 54ns"
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
        "date": 1743554658798,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.749351956924116,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 704ms 685us 113ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.452024800176645,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 207ms 133us 602ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.469940136268134,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 108ms 786us 255ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.876159850287697,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 221ms 649us 274ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.212368361651606,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 872ms 785us 690ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.659954951843492,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 715ms 492us 880ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.377670922744194,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 751ms 427us 642ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 54.92330186217792,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 207ms 208us 345ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.91459661305986,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 358ms 709us 576ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.29437186235864,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 832ms 335us 412ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.18609259504762,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 781ms 433us 297ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.217205361865513,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 662ms 905us 395ns"
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
        "date": 1743641010769,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.106839823923735,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 566ms 852us 567ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.138172039404104,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 459ms 78us 602ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.478641953536457,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 67ms 251us 142ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.878528344767059,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 210ms 948us 343ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.81507776465609,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 162ms 783us 857ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.96005171374926,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 377ms 779us 503ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.545235030607255,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 826ms 699us 776ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.22763844544761,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 106ms 875us 980ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.22979478797816,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 464ms 197us 405ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.13709550135297,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 309ms 5us 270ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.409977652703716,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 938ms 535us 150ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.967038405435902,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 629ms 22us 27ns"
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
        "date": 1743727457160,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 49.32101354461678,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 275ms 333us 537ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.762656750426935,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 766ms 500us 995ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.497015605428482,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 979ms 714us 668ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.983102411375905,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 741ms 851us 757ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.309085092467896,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 541ms 316us 380ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.197258761813377,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 249ms 790us 645ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.385630052776953,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 706ms 980us 251ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 54.57295244721829,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 324ms 95us 640ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.72731282167605,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 702ms 72us 53ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.54180493774673,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 597ms 708us 145ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.299831634127912,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 350ms 326us 951ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.073697427954443,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 213ms 439us 346ns"
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
        "date": 1743813787258,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.1130536685086,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 564ms 473us 813ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.08152112340493,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 505ms 35us 357ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.548182790614216,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 737ms 107us 197ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.042141345759347,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 479ms 896us 513ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.84548274757891,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 140ms 369us 61ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.60965883242725,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 772ms 763us 329ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.4532896368389,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 331ms 262us 241ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.05511471435351,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 163ms 616us 681ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.77309208833991,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 694ms 690us 198ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.32803361178844,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 637ms 349us 193ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.28192163674092,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 417ms 811us 872ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.171329994274927,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 837ms 832us 779ns"
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
        "date": 1743900387074,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.114427281914885,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 563ms 948us 51ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.44358102866978,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 213ms 853us 425ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.637970179140709,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 315ms 482us 800ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.914123360992418,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 50ms 538us 325ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.997701486966996,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 317ms 381us 338ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.11979095339692,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 200ms 761us 637ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.650691540448767,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 256ms 361us 924ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.24803032280277,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 100ms 192us 788ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 81.99329700385753,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 196ms 118us 909ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.18423171958733,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 300ms 661us 284ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.374479091219055,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 70ms 645us 22ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.029800327254403,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 383ms 808us 880ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1743987370718,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 48.84375097928973,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 473ms 448us 86ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.67299765557348,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 32ms 407us 303ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.600930458342473,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 488ms 785us 893ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.08172635078482,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 305ms 406us 738ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.65670019143147,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 280ms 142us 369ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.320980129100484,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 105ms 271us 911ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.51085929498058,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 14ms 537us 356ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.65024264397655,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 345ms 980us 765ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.51378502070725,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 736ms 616us 885ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.51112085193579,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 603ms 383us 929ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.306680781519304,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 324ms 558us 529ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.276185187439722,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 439ms 458us 232ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744073019805,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.28543585781566,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 498ms 713us 100ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.17034574208988,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 29s 265ms 141us 405ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.9156863041497,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 43ms 512us 421ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.25226243726777,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 564ms 43us 637ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.80712186852249,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 768ms 465us 989ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.346658994854856,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 952ms 556us 661ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.765039177798753,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 647ms 813us 572ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 60.12164418761618,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 632ms 944us 982ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 82.33901657061172,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 144ms 910us 659ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.19656235940384,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 477ms 713us 363ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.56077307892905,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 383ms 654us 509ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.552117640533076,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 415ms 230us 348ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744159486686,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.323243227579056,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 484ms 349us 334ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.22033504864811,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 392ms 688us 446ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.569364305481454,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 637ms 174us 487ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.003491847577452,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 651ms 150us 956ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.71297713785404,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 516ms 71us 546ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.356304628774183,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 942ms 86us 75ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.571384841818967,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 684ms 447us 951ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.17953640336247,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 897ms 732us 912ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.39117005106328,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 921ms 370us 737ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.94353064317363,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 523ms 833us 543ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.314853900568323,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 293ms 837us 266ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.243751558707455,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 562ms 133us 377ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/z63d/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1744245815578,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.16355972265725,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 170ms 470us 829ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.72730593876048,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 227ms 698us 151ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 15.010832714159063,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 618ms 556us 15ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.3194814979935,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 276ms 360us 700ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.899585047495044,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 707ms 215us 97ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.68615264031731,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 587ms 988us 847ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.759071609870452,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 679ms 322us 294ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.303222982314296,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 862ms 489us 924ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.26997047620559,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 457ms 958us 986ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.7034585265912,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 209ms 436us 127ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.733936367399764,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 758ms 802us 594ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.485940572142017,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 657ms 746us 255ns"
          }
        ]
      }
    ]
  }
}