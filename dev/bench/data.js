window.BENCHMARK_DATA = {
  "lastUpdate": 1746233077766,
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
        "date": 1744331874433,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137948214,
            "range": "± 2872686",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81970092,
            "range": "± 1283701",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112198408,
            "range": "± 589139",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120151437,
            "range": "± 3220023",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132388066,
            "range": "± 2640513",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132230519,
            "range": "± 1385872",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84116724,
            "range": "± 4425116",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84106093,
            "range": "± 1469916",
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
        "date": 1744418126397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15012,
            "unit": "kB",
            "extra": "shim: 12160 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66896,
            "unit": "kB",
            "extra": "shim: 54400 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18816,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3584 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19508,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3508 kB"
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
        "date": 1744418188680,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139892514,
            "range": "± 5226514",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83357181,
            "range": "± 840920",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115632751,
            "range": "± 1398752",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 122755135,
            "range": "± 1134672",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131675583,
            "range": "± 2237312",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133455152,
            "range": "± 1209148",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83570640,
            "range": "± 3171857",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84473053,
            "range": "± 2213490",
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
        "date": 1744506085807,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14884,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2852 kB"
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
            "extra": "shim: 15360 kB\nzygote: 3588 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19256,
            "unit": "kB",
            "extra": "shim: 15872 kB\nzygote: 3384 kB"
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
        "date": 1744506192035,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136278735,
            "range": "± 2746287",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82195415,
            "range": "± 863797",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113595069,
            "range": "± 1568610",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119949293,
            "range": "± 1670165",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132396696,
            "range": "± 1259468",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133424213,
            "range": "± 1421227",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83375247,
            "range": "± 2059994",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83801258,
            "range": "± 1162673",
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
        "date": 1744591153748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14756,
            "unit": "kB",
            "extra": "shim: 11904 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65616,
            "unit": "kB",
            "extra": "shim: 53120 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18816,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3456 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19380,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3380 kB"
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
        "date": 1744591219641,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140273483,
            "range": "± 2678129",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82896168,
            "range": "± 1242795",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115293555,
            "range": "± 1590255",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121066411,
            "range": "± 1989473",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133438754,
            "range": "± 4523584",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133927030,
            "range": "± 1942300",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84782863,
            "range": "± 1606262",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84931831,
            "range": "± 1452068",
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
        "date": 1744677450423,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15268,
            "unit": "kB",
            "extra": "shim: 12416 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66256,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12624 kB"
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
            "extra": "shim: 15488 kB\nzygote: 3508 kB"
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
        "date": 1744677479669,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136626591,
            "range": "± 3398378",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81227141,
            "range": "± 1457235",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113877787,
            "range": "± 2728253",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 118963151,
            "range": "± 1414476",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131134411,
            "range": "± 2728251",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 131900231,
            "range": "± 2139771",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83098824,
            "range": "± 2310684",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 81883107,
            "range": "± 1437284",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1744764327403,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15280,
            "unit": "kB",
            "extra": "shim: 12416 kB\nzygote: 2864 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65752,
            "unit": "kB",
            "extra": "shim: 53376 kB\nzygote: 12376 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18576,
            "unit": "kB",
            "extra": "shim: 15104 kB\nzygote: 3472 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19404,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3404 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1744764419587,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139403618,
            "range": "± 3464287",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81759973,
            "range": "± 1229531",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113629834,
            "range": "± 1250962",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120513749,
            "range": "± 3034347",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135027925,
            "range": "± 2799495",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 136010389,
            "range": "± 2262489",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83917087,
            "range": "± 2264541",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83802818,
            "range": "± 1462357",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1744850143741,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15148,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2860 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66392,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12632 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18576,
            "unit": "kB",
            "extra": "shim: 14976 kB\nzygote: 3600 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19272,
            "unit": "kB",
            "extra": "shim: 15744 kB\nzygote: 3528 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1744850243309,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137949285,
            "range": "± 2006154",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80463413,
            "range": "± 917422",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111985383,
            "range": "± 1115483",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 118022106,
            "range": "± 1585129",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 130973092,
            "range": "± 2693498",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132541610,
            "range": "± 2243080",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83583000,
            "range": "± 2456973",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82686420,
            "range": "± 1410075",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1744936517024,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15580,
            "unit": "kB",
            "extra": "shim: 12544 kB\nzygote: 3036 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66264,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12632 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18448,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3600 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19532,
            "unit": "kB",
            "extra": "shim: 16128 kB\nzygote: 3404 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1744936635304,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138250940,
            "range": "± 3553512",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82157601,
            "range": "± 814681",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113724809,
            "range": "± 1348800",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 118557563,
            "range": "± 1122662",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133838806,
            "range": "± 4603859",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134812549,
            "range": "± 1726343",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 85217751,
            "range": "± 1433584",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 87380911,
            "range": "± 1318679",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745022869926,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14636,
            "unit": "kB",
            "extra": "shim: 11776 kB\nzygote: 2860 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66136,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12632 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18576,
            "unit": "kB",
            "extra": "shim: 14976 kB\nzygote: 3600 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19404,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3404 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745022983321,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 134648062,
            "range": "± 3671507",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80192773,
            "range": "± 1307907",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111135602,
            "range": "± 1319637",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 117163403,
            "range": "± 1263232",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131041316,
            "range": "± 3869421",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 131485918,
            "range": "± 927473",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83312967,
            "range": "± 1243905",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82118484,
            "range": "± 985741",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745109556246,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15020,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2732 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66136,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12632 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18832,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3600 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19276,
            "unit": "kB",
            "extra": "shim: 15744 kB\nzygote: 3532 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745109746972,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136460766,
            "range": "± 3378463",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81515730,
            "range": "± 2404920",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112832346,
            "range": "± 2100212",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 124085887,
            "range": "± 2777855",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131733489,
            "range": "± 3036216",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132345147,
            "range": "± 2642274",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82358628,
            "range": "± 2040892",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84314440,
            "range": "± 1694064",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745195870168,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15148,
            "unit": "kB",
            "extra": "shim: 12160 kB\nzygote: 2988 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65624,
            "unit": "kB",
            "extra": "shim: 53248 kB\nzygote: 12376 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18828,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3468 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19272,
            "unit": "kB",
            "extra": "shim: 15744 kB\nzygote: 3528 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745196085284,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138600197,
            "range": "± 3888617",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84766206,
            "range": "± 1699077",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 118968381,
            "range": "± 1933956",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 126917922,
            "range": "± 2151483",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133096276,
            "range": "± 3949392",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 137360564,
            "range": "± 1422220",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84421310,
            "range": "± 1419978",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84208295,
            "range": "± 2037395",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745282241868,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15020,
            "unit": "kB",
            "extra": "shim: 12160 kB\nzygote: 2860 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65880,
            "unit": "kB",
            "extra": "shim: 53376 kB\nzygote: 12504 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18968,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3736 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19352,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3352 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745282305810,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 142391692,
            "range": "± 3425507",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 85588956,
            "range": "± 1532769",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 116500403,
            "range": "± 2293943",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 124498248,
            "range": "± 2733760",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134691743,
            "range": "± 3646015",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 136715768,
            "range": "± 2135346",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 85705089,
            "range": "± 3231768",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86134421,
            "range": "± 1064748",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745368667190,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15148,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2860 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65624,
            "unit": "kB",
            "extra": "shim: 53248 kB\nzygote: 12376 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18956,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3724 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19272,
            "unit": "kB",
            "extra": "shim: 15744 kB\nzygote: 3528 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745368788962,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140020059,
            "range": "± 4477761",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 85092144,
            "range": "± 2257585",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 118330985,
            "range": "± 978604",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 125723306,
            "range": "± 1376783",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 140389499,
            "range": "± 3024416",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 139463191,
            "range": "± 1396131",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 87599167,
            "range": "± 2985861",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 89919790,
            "range": "± 1293027",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745454976238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15064,
            "unit": "kB",
            "extra": "shim: 12332 kB\nzygote: 2732 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65888,
            "unit": "kB",
            "extra": "shim: 53512 kB\nzygote: 12376 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18624,
            "unit": "kB",
            "extra": "shim: 15104 kB\nzygote: 3520 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19308,
            "unit": "kB",
            "extra": "shim: 15776 kB\nzygote: 3532 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745455129260,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 142492271,
            "range": "± 2884086",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84840291,
            "range": "± 2640932",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 117985941,
            "range": "± 1813291",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 124500846,
            "range": "± 3646245",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135969560,
            "range": "± 7594443",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 139613939,
            "range": "± 3417468",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 89973465,
            "range": "± 3432865",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 89265179,
            "range": "± 2686634",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745541404041,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15392,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 3104 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65824,
            "unit": "kB",
            "extra": "shim: 53136 kB\nzygote: 12688 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18980,
            "unit": "kB",
            "extra": "shim: 15324 kB\nzygote: 3656 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19352,
            "unit": "kB",
            "extra": "shim: 15788 kB\nzygote: 3564 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745541523522,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139721864,
            "range": "± 4498903",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83773032,
            "range": "± 2018064",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115553381,
            "range": "± 2063258",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 122996916,
            "range": "± 2055690",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 137378735,
            "range": "± 3298367",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 136125071,
            "range": "± 2030886",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 87474655,
            "range": "± 2377347",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86489669,
            "range": "± 1569402",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745627746809,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14860,
            "unit": "kB",
            "extra": "shim: 11960 kB\nzygote: 2900 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65788,
            "unit": "kB",
            "extra": "shim: 53052 kB\nzygote: 12736 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18664,
            "unit": "kB",
            "extra": "shim: 15160 kB\nzygote: 3504 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19404,
            "unit": "kB",
            "extra": "shim: 15940 kB\nzygote: 3464 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745627851318,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138032282,
            "range": "± 2434097",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 79236332,
            "range": "± 1240583",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111492290,
            "range": "± 2131306",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 118509290,
            "range": "± 3073150",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134844581,
            "range": "± 5357886",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135677369,
            "range": "± 2879015",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 87848508,
            "range": "± 3746615",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85742563,
            "range": "± 1505557",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745714333001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15280,
            "unit": "kB",
            "extra": "shim: 12548 kB\nzygote: 2732 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65904,
            "unit": "kB",
            "extra": "shim: 53324 kB\nzygote: 12580 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18600,
            "unit": "kB",
            "extra": "shim: 15100 kB\nzygote: 3500 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19388,
            "unit": "kB",
            "extra": "shim: 15948 kB\nzygote: 3440 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745714552740,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139277636,
            "range": "± 5696707",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81128420,
            "range": "± 1397691",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112339565,
            "range": "± 3825997",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120995238,
            "range": "± 3226844",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 138082415,
            "range": "± 5648855",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 136469182,
            "range": "± 2057705",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 88505092,
            "range": "± 7400215",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86556418,
            "range": "± 1936122",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745800771694,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15144,
            "unit": "kB",
            "extra": "shim: 12412 kB\nzygote: 2732 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66072,
            "unit": "kB",
            "extra": "shim: 53664 kB\nzygote: 12408 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18840,
            "unit": "kB",
            "extra": "shim: 15240 kB\nzygote: 3600 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19756,
            "unit": "kB",
            "extra": "shim: 16356 kB\nzygote: 3400 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745800876848,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137164334,
            "range": "± 5835586",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83301404,
            "range": "± 1112925",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114143438,
            "range": "± 1776990",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121955547,
            "range": "± 2648580",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133591737,
            "range": "± 3946930",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 139522596,
            "range": "± 3097634",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 88272859,
            "range": "± 4900504",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 87910181,
            "range": "± 1907628",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745886981947,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15468,
            "unit": "kB",
            "extra": "shim: 12432 kB\nzygote: 3036 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66432,
            "unit": "kB",
            "extra": "shim: 53748 kB\nzygote: 12684 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19064,
            "unit": "kB",
            "extra": "shim: 15340 kB\nzygote: 3724 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19644,
            "unit": "kB",
            "extra": "shim: 16212 kB\nzygote: 3432 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745887107484,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141295727,
            "range": "± 3202647",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82933667,
            "range": "± 1287670",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 117824525,
            "range": "± 2955686",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 123646304,
            "range": "± 2857535",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135571772,
            "range": "± 3203454",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 139643096,
            "range": "± 2522440",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 88196429,
            "range": "± 3996195",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 88392685,
            "range": "± 1797518",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745973389457,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14940,
            "unit": "kB",
            "extra": "shim: 12176 kB\nzygote: 2764 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66016,
            "unit": "kB",
            "extra": "shim: 53384 kB\nzygote: 12632 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18712,
            "unit": "kB",
            "extra": "shim: 15060 kB\nzygote: 3652 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19556,
            "unit": "kB",
            "extra": "shim: 16128 kB\nzygote: 3428 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745973509245,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141443949,
            "range": "± 3939029",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84873753,
            "range": "± 2005337",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 118110968,
            "range": "± 2926482",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 126864739,
            "range": "± 2653909",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 145085700,
            "range": "± 4010738",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 141463814,
            "range": "± 3944654",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 92423859,
            "range": "± 2858839",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 93860662,
            "range": "± 2048985",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1746060049741,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15596,
            "unit": "kB",
            "extra": "shim: 12492 kB\nzygote: 3104 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65916,
            "unit": "kB",
            "extra": "shim: 53412 kB\nzygote: 12504 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18568,
            "unit": "kB",
            "extra": "shim: 15100 kB\nzygote: 3468 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19368,
            "unit": "kB",
            "extra": "shim: 15840 kB\nzygote: 3528 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1746060166688,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139600226,
            "range": "± 3984265",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84658512,
            "range": "± 1316101",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113654378,
            "range": "± 2206363",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 125091974,
            "range": "± 2696143",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 136577477,
            "range": "± 3776105",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 139174558,
            "range": "± 4656899",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 89507718,
            "range": "± 4249809",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 87613856,
            "range": "± 2650392",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1746146238781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15100,
            "unit": "kB",
            "extra": "shim: 12356 kB\nzygote: 2744 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66004,
            "unit": "kB",
            "extra": "shim: 53472 kB\nzygote: 12532 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18820,
            "unit": "kB",
            "extra": "shim: 15220 kB\nzygote: 3600 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19560,
            "unit": "kB",
            "extra": "shim: 16132 kB\nzygote: 3428 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1746146346557,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 143221076,
            "range": "± 5315152",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82877213,
            "range": "± 1658846",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111763174,
            "range": "± 1226978",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120655632,
            "range": "± 2672297",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131841914,
            "range": "± 4083885",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135137043,
            "range": "± 1963221",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 88766954,
            "range": "± 2752189",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85962145,
            "range": "± 2773698",
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1746232513594,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15120,
            "unit": "kB",
            "extra": "shim: 12232 kB\nzygote: 2888 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66476,
            "unit": "kB",
            "extra": "shim: 53924 kB\nzygote: 12552 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18976,
            "unit": "kB",
            "extra": "shim: 15380 kB\nzygote: 3596 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19376,
            "unit": "kB",
            "extra": "shim: 15916 kB\nzygote: 3460 kB"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1746232631673,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138305624,
            "range": "± 3770536",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81127305,
            "range": "± 2221966",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112725273,
            "range": "± 1085767",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121372552,
            "range": "± 2942440",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132473849,
            "range": "± 8262792",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132768235,
            "range": "± 1742219",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 86775444,
            "range": "± 3859920",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85919926,
            "range": "± 1943357",
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
        "date": 1744418117214,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20322.0008,
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
        "date": 1744506094328,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20467.8684,
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
        "date": 1744591173330,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20997.8675,
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
        "date": 1744677384709,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20494.0724,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1744764524118,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20582.1878,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1744850200585,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20973.2494,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1744936502229,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20365.0859,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745022865777,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19388.6716,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745109531745,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20252.7703,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745195948098,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20654.1532,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745282165747,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19372.4825,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745368558072,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19386.2854,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745454937325,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20470.757,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745541469947,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20306.9907,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745627721776,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20566.8836,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745714323454,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20591.3933,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745800662451,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20384.7983,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745887034987,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19459.2677,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745973370388,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20241.2673,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1746060030822,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20674.9798,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1746146194209,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19274.2181,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1746232583036,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20603.0585,
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
        "date": 1744418118757,
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
        "date": 1744506095836,
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
        "date": 1744591176070,
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
        "date": 1744677386330,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1744764526753,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1744850202553,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1744936503903,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745022868508,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745109533653,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745195951019,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745282167443,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745368560859,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745454939110,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745541471995,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745627724738,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745714325255,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745800664533,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745887037188,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745973372350,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1746060032768,
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1746146197068,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1746232585481,
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
        "date": 1744332274705,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.444446535229716,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 67ms 795us 850ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.036720723340814,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 749ms 472us 758ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.665362937078344,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 187ms 879us 447ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.274033869537423,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 470ms 589us 403ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.466089477790874,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 996ms 923us 877ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.24630275179393,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 61ms 892us 166ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.519282921760201,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 968ms 420us 203ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.209771504168806,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 889ms 104us 190ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.79172861937515,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 532ms 627us 345ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.16357490275836,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 304ms 316us 636ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.436529772680114,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 840ms 93us 2ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.375858530490675,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 65ms 500us 666ns"
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
        "date": 1744418613400,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.86726778195963,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 659ms 7us 523ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.37370980544531,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 269ms 582us 283ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.349815511426113,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 687ms 307us 74ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.010492119792014,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 620ms 67us 618ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.24441065876826,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 849ms 666us 361ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.851613336835513,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 499ms 26us 961ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.289172246636868,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 249ms 231us 588ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.837067942233354,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 996ms 88us 265ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.06759533579769,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 809ms 412us 96ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.50594606472464,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 791ms 972us 304ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.09167553220245,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 143ms 932us 619ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.170237303707676,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 842ms 11us 420ns"
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
        "date": 1744506833362,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.65819817112621,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 358ms 11us 611ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.78387449616482,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 945ms 548us 493ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.67334668279932,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 150ms 778us 525ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.093285985293516,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 254ms 624us 803ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.854943746280064,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 736ms 750us 683ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.100582554074645,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 221ms 948us 386ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.607569930004393,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 488ms 507us 143ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.29450531863545,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 154ms 275us 425ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.145170306662,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 477ms 358us 226ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.59385368295773,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 405ms 930us 256ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.423980278744068,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 886ms 580us 660ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.29335957252543,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 374ms 696us 578ns"
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
        "date": 1744591605475,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.249202795313856,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 139ms 47us 995ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.43798283644482,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 443ms 890us 198ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.927284566656056,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 991ms 420us 679ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.899329415393362,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 117ms 114us 611ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.798256868051126,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 774ms 353us 817ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.6829738678837,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 591ms 364us 980ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.825988173637782,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 327ms 560us 782ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 60.00829457690827,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 664ms 362us 936ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.74726047725721,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 384ms 321us 79ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 76.91715770403876,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 1ms 425ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.57522710690465,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 330ms 998us 396ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.32601419442758,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 251ms 937us 435ns"
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
        "date": 1744677890263,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.88291218366873,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 274ms 168us 660ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.0394871500524,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 747ms 342us 681ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.965682090461701,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 819ms 540us 463ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.081931142614405,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 304ms 506us 402ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.95641113771935,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 669ms 715us 736ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.34746277645015,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 951ms 683us 881ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.833933422935491,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 286ms 20us 861ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.24915852942332,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 877ms 876us 831ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.60883156600985,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 405ms 588us 576ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.47778308081159,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 248ms 931us 794ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.652513938474602,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 50ms 993us 123ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.355324435148376,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 142ms 168us 348ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1744764777224,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.43137025676123,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 72ms 551us 320ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.40094350929616,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 471ms 815us 387ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.895844858507624,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 132ms 815us 191ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.270583858193605,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 485ms 380us 866ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.740990305657554,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 812ms 453us 221ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.653795580175515,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 622ms 387us 573ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.779536516703232,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 571ms 381us 395ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.883066475022936,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 699ms 211us 628ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.29715005525654,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 453ms 742us 123ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 77.23113766126983,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 948ms 145us 402ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.625443226529477,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 148ms 772us 359ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.476381973115707,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 692ms 936us 206ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1744850675909,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.309633983201834,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 116ms 937us 433ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.71213730399134,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 1ms 684us 455ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.794129651777085,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 594ms 378us 550ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.07164351676528,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 349ms 764us 635ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.07127180323971,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 266ms 524us 669ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.036321188014394,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 293ms 25us 259ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.65943230161291,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 209ms 484us 693ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.9884517647502,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 244ms 812us 882ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.24821362199437,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 618ms 580us 966ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.34458005018514,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 450ms 879us 665ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.466291660549903,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 730ms 127us 986ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.391177268741956,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 8ms 430us 548ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1744937152728,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.83069610779113,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 293ms 586us 139ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.56720547768165,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 115ms 787us 748ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.569157400495966,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 638ms 149us 243ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.881421190452725,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 197ms 882us 998ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.626251713851495,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 577ms 188us 916ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.955087670255736,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 383ms 310us 742ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.493731188641009,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 108ms 486us 824ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.74014939570428,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 318ms 971us 469ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.74768983131993,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 539ms 548us 194ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.53096467151252,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 417ms 242us 141ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.24544129469007,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 555ms 730us 119ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.082846590059628,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 178ms 47us 549ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745023422053,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.75635418413552,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 701ms 966us 701ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.97555667030855,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 591ms 396us 255ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.235361460343974,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 247ms 601us 565ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.793426916721543,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 597ms 589us 499ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.188279977024756,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 890ms 192us 303ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.32025234528661,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 106ms 118us 468ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.164052234572823,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 964ms 450us 929ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.016078159331265,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 538ms 912us 396ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.41288574650726,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 917ms 746us 62ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 71.6790515651765,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 951ms 77us 451ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.04729296889241,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 315ms 806us 282ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.024455499443665,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 404ms 616us 496ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745110052646,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 53.247748570681146,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 780ms 136us 754ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.86803212073914,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 123ms 769us 360ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 15.18611940608245,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 849ms 607us 346ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.32691790225878,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 244ms 689us 531ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.8651394923123,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 729ms 998us 993ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.962953179096363,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 296ms 660us 923ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 14.046773295061145,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 190ms 726us 795ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 60.08837786839562,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 642ms 153us 366ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 81.23197551310838,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 310ms 423us 250ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 78.04126829166111,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 813ms 733us 322ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.792102383235314,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 551ms 804us 603ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.67243503769997,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 979ms 241us 49ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745196399949,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 53.34035107724775,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 747ms 533us 149ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 37.409991996485736,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 26s 730ms 826us 355ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 15.174431682163421,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 900ms 326us 348ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.432705144519993,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 4s 797ms 453us 890ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 39.58567025490352,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 261ms 666us 496ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 31.691714970655976,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 31s 553ms 988us 193ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 14.08610453784616,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 991ms 947us 938ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 60.28114536407077,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 588ms 934us 964ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 83.18599350443917,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 21ms 254us 515ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 79.40107127833264,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 594ms 288us 514ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.75301366478189,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 690ms 752us 960ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.78786977729492,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 566ms 818us 975ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745282710026,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.470531819049725,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 428ms 592us 724ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.41525181694627,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 461ms 21us 141ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.635676501513041,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 326ms 189us 83ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.100175145841286,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 224ms 397us 422ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.19504201940425,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 181ms 408us 558ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.84633611512047,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 418ms 761us 57ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.461100544394268,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 288ms 130us 952ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.29024162233366,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 454ms 979us 621ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.08261229269813,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 806ms 948us 572ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 76.12692431463005,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 135ms 956us 943ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.264637737095217,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 483ms 78us 576ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.28615484212132,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 401ms 847us 747ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745369098135,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.227203330169765,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 147ms 109us 863ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.8104700995455,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 924ms 793us 984ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.653076023798732,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 245ms 56us 422ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.070241673596492,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 355ms 936us 531ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.4642453635738,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 998ms 170us 263ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.22481918887356,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 85ms 392us 298ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.489802262032203,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 130ms 71us 40ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.772103143906016,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 14ms 875us 196ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.89851925989257,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 361ms 165us 682ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.39467300181627,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 441ms 822us 642ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.251200844946165,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 533ms 914us 296ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.22749205072857,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 623ms 816us 969ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745455476769,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 57.170483034266994,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 491ms 543us 659ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.0001214879844,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 26s 315ms 705us 341ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.878895110001578,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 209ms 291us 591ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.057491373181975,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 412ms 125us 49ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 43.197283433291695,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 149ms 603us 876ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 32.7847021985749,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 30s 502ms 30us 915ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.99482705865466,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 454ms 973us 742ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.69757151878595,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 36ms 479us 945ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 89.89994992230271,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 123ms 476us 719ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 78.74102127551843,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 699ms 860us 680ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.78366338941053,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 581ms 747us 846ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.383748597946994,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 36ms 92us 810ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745541921373,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 53.20901597004103,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 793ms 807us 436ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.075969658684734,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 26s 263ms 283us 876ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.792740271660485,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 600ms 727us 224ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.076378061384272,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 328ms 928us 336ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 40.94020953425803,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 24s 425ms 864us 239ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 31.57446102537667,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 31s 671ms 166us 111ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.563593028924338,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 726ms 777us 106ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.577505275339355,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 784ms 858us 570ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 82.70749164386527,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 90ms 803us 144ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 79.15983168026509,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 632ms 669us 610ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.253233313097205,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 526ms 219us 475ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.386021774596955,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 27ms 625us 482ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745628260140,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 55.529414324860134,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 8ms 473us 746ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.47508011077936,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 990ms 849us 67ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.752839259394685,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 783ms 562us 365ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.073846864120066,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 340ms 66us 276ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 42.4012499463454,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 584ms 210us 401ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 32.84496297261479,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 30s 446ms 68us 727ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.753279414463261,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 709ms 931us 200ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.7696742509778,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 310ms 120us 110ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 88.03880815530479,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 358ms 627us 189ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 82.19346036984264,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 166ms 418us 52ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.583171527890492,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 302ms 95us 912ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.337358907836254,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 209ms 403us 897ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745714849324,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 56.21569304100981,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 788ms 627us 88ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.74957759540771,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 806ms 732us 926ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.780407805879703,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 657ms 131us 869ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.95799224837571,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 853ms 892us 113ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 42.379506928539094,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 596ms 310us 398ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 32.96883060375278,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 30s 331ms 679us 398ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.89208498010239,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 983ms 435us 275ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.15120706838315,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 196ms 547us 594ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 88.38702995690629,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 313ms 877us 166ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 76.50193789197104,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 71ms 564us 297ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.67129268003258,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 983ms 350us 973ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.60218437828313,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 233ms 37us 847ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745801224935,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 55.19007976158134,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 119ms 198us 311ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 37.54550823048315,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 26s 634ms 344us 483ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.626554547121893,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 368ms 801us 195ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.677211821752795,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 132ms 831us 504ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 42.04765533660171,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 782ms 538us 931ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 31.322374511205126,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 31s 926ms 59us 745ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.548735543373425,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 807ms 625us 575ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.185447373971904,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 486ms 966us 456ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 84.26159290693467,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 867ms 803us 177ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 78.00430890560506,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 819ms 804us 624ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.32128813055931,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 269ms 673us 815ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.234238703875256,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 598ms 207us 236ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745887493501,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 55.41347457554175,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 46ms 152us 270ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 39.306164595295336,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 441ms 301us 900ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 15.07262459772131,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 345ms 445us 912ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.10439391910949,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 205ms 900us 439ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 43.185639783022566,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 155ms 845us 439ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 31.975560826125758,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 31s 273ms 884us 622ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.99799555503878,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 438ms 799us 653ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.046171383302465,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 227ms 665us 84ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 89.97690395179298,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 113ms 963us 207ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 82.98520834427606,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 50ms 340us 295ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.763834639710204,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 652ms 222us 865ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.592610712923076,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 267ms 791us 326ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1745973903006,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 56.23752515948637,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 781ms 721us 318ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 39.058024337939706,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 602ms 933us 506ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.785365327659862,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 634ms 446us 484ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.117448443674771,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 148ms 728us 982ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 42.89286550676217,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 313ms 900us 533ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 31.872678029488974,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 31s 374ms 834us 555ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.999344645011305,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 431ms 915us 233ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.035816488327924,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 938ms 869us 647ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 89.8137312969708,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 134ms 154us 940ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 77.10871937387854,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 968ms 701us 959ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.72474744751131,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 791ms 635us 308ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.61879891086518,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 172ms 820us 272ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1746060559918,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 57.44164480485581,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 408ms 972us 243ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.45627105580298,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 26s 3ms 561us 254ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.997364314079075,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 678ms 382us 885ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.12415058840096,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 119ms 415us 709ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 42.83143437474222,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 347ms 338us 575ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 32.28357332014502,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 30s 975ms 505us 409ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.947995427482388,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 694ms 890us 151ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.56985705255197,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 73ms 628us 831ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 90.75214225672734,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 19ms 23us 630ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 79.17866010970573,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 629ms 665us 602ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.712324924144774,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 836ms 79us 333ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.57442366093396,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 333ms 922us 944ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1746146713662,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 57.47536936109451,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 398ms 757us 261ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 39.62078292070974,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 239ms 279us 143ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 15.22843428759202,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 666ms 632us 637ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.298081611113282,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 367ms 673us 243ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 44.205452871877334,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 22s 621ms 643us 599ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 33.2311766454448,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 30s 92ms 223us 657ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 14.146045220772303,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 691ms 135us 536ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.84608989787229,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 709ms 529us 423ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 89.93782288468182,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 118ms 792us 605ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 84.54591343992053,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 827ms 892us 790ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.903356147201396,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 159ms 849us 162ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.769567606687215,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 631ms 829us 720ns"
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
          "id": "775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4",
          "message": "chore(deps): bump the patch group with 2 updates (#973)\n\nBumps the patch group with 2 updates: [anyhow](https://github.com/dtolnay/anyhow) and [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `anyhow` from 1.0.97 to 1.0.98\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.97...1.0.98)\n\nUpdates `clap` from 4.5.35 to 4.5.36\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.36)\n\n---\nupdated-dependencies:\n- dependency-name: anyhow\n  dependency-version: 1.0.98\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n- dependency-name: clap\n  dependency-version: 4.5.36\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T20:08:05Z",
          "url": "https://github.com/z63d/runwasi/commit/775d2b5ff3b9f211ce7ecf25f5bbd5aa86b73be4"
        },
        "date": 1746233076179,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 54.81326605120325,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 243ms 758us 711ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.83604754896549,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 147ms 320us 805ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.692214188458333,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 63ms 260us 389ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.10319020654483,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 211ms 176us 998ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 41.72765039849703,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 964ms 924us 707ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.43110294072257,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 861ms 115us 877ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.750713025176111,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 723ms 501us 550ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.78777492086053,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 925ms 74us 112ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 84.95417609800744,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 771ms 51us 712ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 81.08744598317317,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 332ms 365us 237ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.596216025879265,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 254ms 698us 929ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.37857923574622,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 55ms 356us 854ns"
          }
        ]
      }
    ]
  }
}