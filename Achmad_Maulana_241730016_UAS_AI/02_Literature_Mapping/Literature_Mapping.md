# Literature Mapping - NetGuard AI

Mahasiswa: Achmad Maulana (241730016)

| No | Tahun | Penulis | Dataset | Metode | Hasil | Kelebihan | Kekurangan |
|---:|---:|---|---|---|---|---|---|
| 1 | 2021 | Z. K. Maseer, R. Yusof, N. Bahaman, S. A. Mostafa, and C. F. M. Foozy | CICIDS2017 | ML benchmarking | Multiple ML models benchmarked for anomaly-based IDS. | Strong baseline reference for classical ML on CICIDS2017. | Focuses on model benchmarking, not educational dashboard deployment. |
| 2 | 2024 | R. Dube | CICIDS2017 | Dataset validity analysis | Highlights methodological risks when CICIDS2017 is used incorrectly. | Important validity warning for CICIDS2017 research. | Does not provide a deployed anomaly monitoring prototype. |
| 3 | 2024 | M. Sajid, K. R. Malik, A. Almogren, T. S. Malik, A. H. Khan, J. Tanveer, and A. U. Rehman | CICIDS2017, UNSW-NB15, NSL-KDD, WSN-DS | XGBoost, CNN, LSTM, CNN-LSTM | Hybrid ML/DL models evaluated on multiple IDS datasets. | Strong multi-dataset and hybrid-model evaluation. | More complex than a low-budget student deployment. |
| 4 | 2025 | M. T. Abdelaziz, A. Radwan, H. Mamdouh, A. S. Saad, A. S. Abuzaid, A. A. AbdElhakeem, S. Zakzouk, K. Moussa, and M. S. Darweesh | CICIDS2017 | Random Forest, permutation feature importance | High F1 with feature importance analysis. | Adds interpretability through feature importance. | Deployment and beginner workflow are not central contributions. |
| 5 | 2024 | M. A. Talukder, M. M. Islam, M. A. Uddin, K. F. Hasan, S. Sharmin, S. A. Alyami, and M. A. Moni | UNSW-NB15, CICIDS2017, CICIDS2018 | Oversampling, stacking feature embedding, PCA, DT/RF/ET | Tree-based models reach very high accuracy on benchmark datasets. | Strong handling of large and imbalanced IDS data. | Pipeline is more complex and dashboard is not the emphasis. |
| 6 | 2024 | M. Deng, C. Sun, Y. Kan, and S. Fan | CICIDS2017 and related IDS datasets | DBN and broad equalization learning | Deep feature learning for high-dimensional intrusion data. | Handles high-dimensional data with deep representation. | Higher complexity and lower beginner explainability. |
| 7 | 2024 | R. Mohammad, F. Saeed, A. A. Almazroi, F. S. Alsubaei, and A. A. Almazroi | Augmented CIC-IDS-2017 | Deep learning and data augmentation | Reported accuracy up to about 91% on augmented CIC-IDS-2017. | Uses augmentation to improve IDS modeling. | Does not target lightweight dashboard deployment. |
| 8 | 2024 | M. Wang, N. Yang, Y. Guo, and N. Weng | Multiple IDS datasets | Learning-based IDS framework | Framework to bridge dataset and learning-process gaps. | Directly discusses dataset-learning gaps. | Less focused on low-budget educational deployment. |
| 9 | 2025 | V. Pai, K. Pai, S. Manjunatha, S. Hirmeti, and V. V. Bhat | Network anomaly datasets | KNN, ensemble and ML approaches | Adaptive machine-learning approach for anomaly detection. | Adaptive framing and recent source. | Need to verify exact dataset and metrics for comparison. |
| 10 | 2025 | U. Ahmed, M. Nazir, A. Sarwar, T. Ali, E.-H. M. Aggoune, T. Shahzad, and M. A. Khan | IDS datasets including CICIDS2017 context | ML, DL, fuzzy clustering | Combines signature-based IDS with ML/DL and fuzzy clustering. | Recent high-visibility journal source. | More complex than lightweight educational dashboard. |

## Primary Research Gap

Belum banyak penelitian deteksi anomali jaringan berbasis CICIDS2017 yang mengintegrasikan model machine learning sederhana, dashboard monitoring ringan, klasifikasi risiko otomatis, rekomendasi tindakan, dan dokumentasi reproducible untuk konteks pendidikan low-budget.