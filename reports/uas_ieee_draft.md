# Draft Artikel IEEE - NetGuard AI

## Title

**NetGuard AI: A Lightweight Machine Learning-Based Network Anomaly Detection Dashboard for Educational Infrastructure**

## Abstract

Network reliability and security are essential for educational institutions, laboratories, and small organizations. However, many beginner network administrators still rely on manual inspection or basic monitoring tools that do not provide predictive insight into anomalous traffic patterns. This study proposes NetGuard AI, a lightweight machine learning-based network anomaly detection system using CICIDS2017-style network traffic data. The proposed system performs data preprocessing, binary label conversion, model training, model evaluation, prediction, risk classification, and dashboard visualization. Three classical machine learning algorithms are compared: Logistic Regression, Decision Tree, and Random Forest. Model performance is evaluated using Accuracy, Precision, Recall, F1-score, and Confusion Matrix. The best model is selected based on F1-score, followed by Recall and Accuracy as secondary criteria. In addition to model evaluation, NetGuard AI provides a Flask-based dashboard that displays total records, normal traffic, anomaly traffic, model accuracy, risk score, prediction results, and recommended actions. The novelty of this work lies in integrating machine learning anomaly detection with a lightweight educational monitoring dashboard and actionable recommendations for beginner network administrators. Experimental results from the final CICIDS2017 subset must be inserted after running the complete experiment. This prototype demonstrates a reproducible and low-budget approach for AI-based network security learning and practical monitoring.

## Keywords

Network Anomaly Detection, Intrusion Detection System, Machine Learning, CICIDS2017, Flask Dashboard

## I. Introduction

The rapid development of Artificial Intelligence has encouraged the use of machine learning in cybersecurity, especially in Network Intrusion Detection Systems. Educational institutions and small organizations require reliable network monitoring, yet many of them do not have the budget or expertise to deploy complex security infrastructure. Conventional monitoring tools often display current network status but do not provide intelligent classification of anomalous traffic.

CICIDS2017 is widely used in IDS research because it contains benign traffic and common attacks in PCAP and CSV flow formats. Nevertheless, previous studies often focus primarily on improving model performance, while practical visualization, risk classification, and beginner-oriented recommendations are less emphasized. This motivates the development of NetGuard AI as a low-budget and reproducible prototype.

The contributions of this study are:

1. A reproducible preprocessing and training pipeline for CICIDS2017-style traffic data.
2. A comparison of Logistic Regression, Decision Tree, and Random Forest for binary anomaly detection.
3. A lightweight Flask dashboard for educational network monitoring.
4. Automated risk classification and recommended actions for beginner network administrators.

## II. Related Works

Recent IDS studies show diverse approaches ranging from classical machine learning to deep learning and hybrid models. Maseer et al. benchmarked machine learning models on CICIDS2017 and provided an important baseline for anomaly-based IDS. Other studies have explored Random Forest with feature importance, hybrid CNN-LSTM approaches, DBN-based models, and multi-dataset evaluation using CICIDS2017, UNSW-NB15, NSL-KDD, and CICIDS2018.

Despite high reported performance in several studies, there are recurring limitations: limited deployment artifacts, limited educational dashboard integration, potential dataset misuse, and insufficient emphasis on actionable interpretation for beginner administrators. NetGuard AI addresses these limitations by focusing on a practical and reproducible dashboard-based prototype.

## III. Proposed Method

The proposed method consists of the following stages:

1. Dataset collection using CICIDS2017 CSV flow data.
2. Preprocessing, including whitespace cleaning, missing value handling, infinite value replacement, duplicate removal, and binary label conversion.
3. Feature handling by selecting numeric network-flow features.
4. Model training using Logistic Regression, Decision Tree, and Random Forest.
5. Model evaluation using standard classification metrics.
6. Best model selection based on F1-score, Recall, and Accuracy.
7. Prediction on new CSV traffic data.
8. Visualization through a Flask-based dashboard.

## IV. Experimental Setup

The experiment uses CICIDS2017-style data. The dataset is split into 80% training data and 20% testing data using `random_state = 42`. Logistic Regression uses StandardScaler and `max_iter = 1000`. Decision Tree uses `random_state = 42`. Random Forest uses `n_estimators = 100` and `random_state = 42`.

The evaluation metrics are Accuracy, Precision, Recall, F1-score, and Confusion Matrix. For the final submission, the experiment must be repeated using a real CICIDS2017 subset rather than only the sample CSV.

## V. Results and Discussion

Table I must be filled after running the final experiment.

| Model | Accuracy | Precision | Recall | F1-score |
|---|---:|---:|---:|---:|
| Logistic Regression | [GANTI] | [GANTI] | [GANTI] | [GANTI] |
| Decision Tree | [GANTI] | [GANTI] | [GANTI] | [GANTI] |
| Random Forest | [GANTI] | [GANTI] | [GANTI] | [GANTI] |

The discussion must explain whether the proposed model outperforms the baseline models. If Random Forest performs better, the improvement may be attributed to ensemble learning and its ability to capture non-linear patterns. If it does not perform better, possible reasons include limited data size, class imbalance, insufficient feature selection, or overfitting.

The dashboard contributes practical value by transforming model metrics into monitoring information, including risk level and recommended action.

## VI. Conclusion

This study presents NetGuard AI, a lightweight machine learning-based network anomaly detection dashboard for educational infrastructure. The system integrates preprocessing, model training, evaluation, prediction, risk classification, and dashboard visualization. The proposed approach is suitable for low-budget academic implementation and can be extended with hyperparameter tuning, cross-validation, multi-class classification, and real-time network log integration.

## References

> Gunakan format IEEE Style. Daftar berikut adalah daftar awal yang wajib diverifikasi dari PDF/publisher sebelum final.

[1] Z. K. Maseer et al., "Benchmarking of Machine Learning for Anomaly-Based Intrusion Detection Systems in the CICIDS2017 Dataset," IEEE Access, 2021.

[2] G. Engelen et al., "Faulty Use of the CIC-IDS-2017 Dataset in Information Security Research," 2023.

[3] A. Ali et al., "Enhancing Intrusion Detection: A Hybrid Machine and Deep Learning Approach," Journal of Cloud Computing, 2024.

[4] [Verify Authors], "Enhancing Network Threat Detection with Random Forest-Based NIDS and Permutation Feature Importance," Journal of Network and Systems Management, 2024.

[5] [Verify Authors], "Machine Learning-Based Network Intrusion Detection for Big and Imbalanced Data," Journal of Big Data, 2024.

[6] [Verify Authors], "Network Intrusion Detection Based on Deep Belief Network and Broad Learning System," Electronics, 2024.

[7] [Verify Authors], "Enhancing Intrusion Detection Systems Using a Deep Learning and Machine Learning Approach," Systems, 2024.

[8] [Verify Authors], "Learn-IDS: Bridging Gaps between Datasets and Learning-Based IDS," Electronics, 2024.

[9] Z. Xu and Y. Liu, "Robust Anomaly Detection in Network Traffic: Evaluating Machine Learning Models on CICIDS2017," arXiv, 2025.

[10] [Verify Authors], "Adaptive Network Anomaly Detection Using Machine Learning," Springer, 2025.

[11] I. Sharafaldin, A. H. Lashkari, and A. A. Ghorbani, "Toward Generating a New Intrusion Detection Dataset and Intrusion Traffic Characterization," ICISSP, 2018.

[12] [Tambahkan referensi 12 dari paper terkait IDS 2021-2026].

[13] [Tambahkan referensi 13].

[14] [Tambahkan referensi 14].

[15] [Tambahkan referensi 15].

[16] [Tambahkan referensi 16].

[17] [Tambahkan referensi 17].

[18] [Tambahkan referensi 18].

[19] [Tambahkan referensi 19].

[20] [Tambahkan referensi 20].

## IEEE Formatting Notes

1. Gunakan template IEEE conference/journal resmi.
2. Panjang artikel 6-12 halaman.
3. Abstract 200-250 kata.
4. Referensi minimal 20.
5. Sitasi harus IEEE Style.
6. Ganti semua `[GANTI]` dan `[Verify Authors]` sebelum final.
