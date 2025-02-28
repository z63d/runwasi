window.BENCHMARK_DATA = {
  "lastUpdate": 1740703403134,
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
      }
    ]
  }
}