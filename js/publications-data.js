/**
 * Publications Data
 * This file contains the BibTeX data as a JavaScript string
 * This avoids CORS issues when testing locally
 * 
 * To update: Edit publications.bib and run: python convert_bib_to_js.py
 */

const BIBTEX_DATA = `
@inproceedings{bhingardive2015unsupervised,
  title={Unsupervised most frequent sense detection using word embeddings},
  author={Bhingardive, Sudha and Singh, Dhirendra and Murthy, Rudra and Redkar, Hanumant and Bhattacharyya, Pushpak},
  booktitle={DENVER},
  year={2015}
}

@inproceedings{ross2017identifying,
  title={Identifying Raga Similarity in Hindustani Classical Music through Distributed Representation of Raga Names},
  author={Ross, Joe Cheri and Murthy, Rudra and Ganguli, Kaustuv Kanti and Bhattacharyya, Pushpak},
  booktitle={Proceedings of the 13th International Symposium on CMMR},
  year={2017}
}

@inproceedings{bhingardive2015using,
  title={Using Word Embeddings for Bilingual Unsupervised WSD},
  author={Bhingardive, Sudha and Singh, Dhirendra and Rudramurthy, V and Bhattacharyya, Pushpak},
  booktitle={Proceedings of the 12th International Conference on Natural Language Processing},
  pages={59--64},
  year={2015}
}

@inproceedings{murthy2018judicious,
  title={Judicious Selection of Training Data in Assisting Language for Multilingual Neural NER},
  author={Murthy, Rudra and Kunchukuttan, Anoop and Bhattacharyya, Pushpak},
  booktitle={Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers)},
  volume={2},
  pages={401--406},
  year={2018}
}

@article{murthy2018improving,
  title={Improving NER Tagging Performance in Low-Resource Languages via Multilingual Learning},
  author={Murthy, Rudra and Khapra, Mitesh M and Bhattacharyya, Pushpak},
  journal={ACM Transactions on Asian and Low-Resource Language Information Processing (TALLIP)},
  volume={18},
  number={2},
  pages={9},
  year={2018},
  publisher={ACM}
}

@inproceedings{rudra2016deep,
  title={A deep learning solution to Named Entity Recognition},
  author={Rudra Murthy, V and Bhattacharyya, Pushpak},
  booktitle={International Conference on Intelligent Text Processing and Computational Linguistics},
  pages={427--438},
  year={2016},
  organization={Springer, Cham}
}

@inproceedings{murthy2019addressing,
  title={Addressing word-order Divergence in Multilingual Neural Machine Translation for extremely Low Resource Languages},
  author={Murthy, Rudra and Kunchukuttan, Anoop and Bhattacharyya, Pushpak},
  booktitle={2019 Annual Conference of the North American Chapter of the Association for Computational Linguistics},
  volume={1},
  pages={3868--3873},
  year={2019}
}

@inproceedings{khatri2020study,
  title={A Study of Efficacy of Cross-lingual Word Embeddings for Indian Languages},
  author={Khatri, Jyotsana and Murthy, Rudra and Bhattacharyya, Pushpak},
  booktitle={Young Researchers' Symposium, Proceedings of the 7th ACM IKDD CoDS and 25th COMAD},
  pages={347--348},
  year={2020}
}

@inproceedings{banerjee2021scrambled,
  title={Scrambled Translation Problem: A Problem of Denoising UNMT},
  author={Banerjee, Tamali and Murthy V, Rudra and Bhattacharyya, Pushpak},
  booktitle={Proceedings of Machine Translation Summit XVIII: Research Track},
  pages={127--138},
  year={2021}
}

@inproceedings{mathias2020happy,
  title={Happy Are Those Who Grade without Seeing: A Multi-Task Learning Approach to Grade Essays Using Gaze Behaviour},
  author={Mathias, Sandeep and Murthy, Rudra and Kanojia, Diptesh and Mishra, Abhijit and Bhattacharyya, Pushpak},
  booktitle={Proceedings of the 1st Conference of the Asia-Pacific Chapter of the Association for Computational Linguistics and the 10th International Joint Conference on Natural Language Processing},
  pages={858},
  year={2020},
  organization={872}
}

@inproceedings{ponkiya2020looking,
  title={Looking inside noun compounds: Unsupervised prepositional and free paraphrasing},
  author={Ponkiya, Girishkumar and Murthy, Rudra and Bhattacharyya, Pushpak and Palshikar, Girish},
  booktitle={Findings of the Association for Computational Linguistics: EMNLP 2020},
  pages={4313--4323},
  year={2020}
}

@inproceedings{mathias2020cognitively,
  title={Cognitively aided zero-shot automatic essay grading},
  author={Mathias, Sandeep and Murthy, Rudra and Kanojia, Diptesh and Bhattacharyya, Pushpak},
  booktitle={Proceedings of the 17th International Conference on Natural Language Processing (ICON)},
  pages={175--180},
  year={2020}
}

@inproceedings{banerjee2021crosslingual,
  title={Crosslingual Embeddings are Essential in UNMT for Distant Languages: An English to IndoAryan Case Study},
  author={Banerjee, Tamali and Murthy V, Rudra and Bhattacharyya, Pushpak},
  booktitle={Proceedings of Machine Translation Summit XVIII: Research Track},
  pages={23--34},
  year={2021}
}

@inproceedings{indulal2021role,
  title={Role of Language Relatedness in Multilingual Fine-tuning of Language Models: A Case Study in Indo-Aryan Languages},
  author={Indulal Dhamecha, Tejas and Murthy V, Rudra and Bharadwaj, Samarth and Sankaranarayanan, Karthik and Bhattacharyya, Pushpak},
  booktitle={Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing},
  pages={8584--8595},
  year={2021}
}

@article{khatri2022simple,
  title={Simple measures of bridging lexical divergence help unsupervised neural machine translation for low-resource languages},
  author={Khatri, Jyotsana and Murthy, Rudra and Banerjee, Tamali and Bhattacharyya, Pushpak},
  journal={Machine Translation},
  year={2022},
  publisher={Springer}
}

@inproceedings{khatri2021language,
  title={Language Model Pretraining and Transfer Learning for Very Low Resource Languages},
  author={Khatri, Jyotsana and Murthy, Rudra and Bhattacharyya, Pushpak},
  booktitle={Proceedings of the Sixth Conference on Machine Translation},
  pages={995--998},
  year={2021}
}

@inproceedings{murthy2022hiner,
  title={Hiner: A large hindi named entity recognition dataset},
  author={Murthy, Rudra and Bhattacharjee, Pallab and Sharnagat, Rahul and Khatri, Jyotsana and Kanojia, Diptesh and Bhattacharyya, Pushpak},
  booktitle={Proceedings of the Thirteenth Language Resources and Evaluation Conference},
  pages={4467--4476},
  year={2022}
}

@inproceedings{mhaske2023naamapadam,
  title={Naamapadam: A large-scale named entity annotated data for Indic languages},
  author={Mhaske, Arnav and Kedia, Harshit and Doddapaneni, Sumanth and Khapra, Mitesh M and Kumar, Pratyush and Murthy, Rudra and Kunchukuttan, Anoop},
  booktitle={Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)},
  pages={10441--10456},
  year={2023}
}

@article{murthy2023semi,
  title={Semi-Structured Object Sequence Encoders},
  author={Murthy V, Rudra and Bhat, Riyaz and Gunasekara, Chulaka and Patel, Siva Sankalp and Wan, Hui and Dhamecha, Tejas Indulal and Contractor, Danish and Danilevsky, Marina},
  journal={arXiv preprint arXiv:2301.01015},
  year={2023}
}

@inproceedings{kumar2022utilizing,
  title={On Utilizing Constituent Language Resources to Improve Downstream Tasks in Hinglish},
  author={Kumar, Vishwajeet and Murthy, Rudra and Dhamecha, Tejas},
  booktitle={Findings of the Association for Computational Linguistics: EMNLP 2022},
  pages={3859--3865},
  year={2022}
}

@article{banerjee2023denoising,
  title={Denoising-based UNMT is more robust to word-order divergence than MASS-based UNMT},
  author={Banerjee, Tamali and Murthy V, Rudra and Bhattacharyya, Pushpak},
  journal={arXiv preprint arXiv:2303.01191},
  year={2023}
}

@article{li2023starcoder,
  title={StarCoder: may the source be with you!},
  author={Li, Raymond and Allal, Loubna Ben and Zi, Yangtian and Muennighoff, Niklas and Kocetkov, Denis and Mou, Chenghao and Marone, Marc and Akiki, Christopher and Li, Jia and Chim, Jenny and others},
  journal={arXiv preprint arXiv:2305.06161},
  year={2023}
}

@inproceedings{mishra2023prompting,
  title={Prompting with Pseudo-Code Instructions},
  author={Mishra, Mayank and Kumar, Prince and Bhat, Riyaz and Murthy, Rudra and Contractor, Danish and Tamilselvam, Srikanth},
  booktitle={Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing},
  pages={15178--15197},
  year={2023}
}

@inproceedings{nafis2023towards,
  title={Towards Safer Communities: Detecting Aggression and Offensive Language in Code-Mixed Tweets to Combat Cyberbullying},
  author={Nafis, Nazia and Kanojia, Diptesh and Saini, Naveen and Murthy, Rudra},
  booktitle={The 7th Workshop on Online Abuse and Harms (WOAH)},
  pages={29--41},
  year={2023}
}

@inproceedings{rawat2023modelling,
  title={Modelling Political Aggression on Social Media Platforms},
  author={Rawat, Akash and Nafis, Nazia and Bhadane, Dnyaneshwar and Kanojia, Diptesh and Murthy, Rudra},
  booktitle={Proceedings of the 13th Workshop on Computational Approaches to Subjectivity, Sentiment, \& Social Media Analysis},
  pages={497--510},
  year={2023}
}

@inproceedings{khatri2023study,
  title={A Study of Multilingual versus Meta-Learning for Language Model Pre-Training for Adaptation to Unseen Low Resource Languages},
  author={Khatri, Jyotsana and Murthy, Rudra and Azad, Amar Prakash and Bhattacharyya, Pushpak},
  booktitle={Proceedings of Machine Translation Summit XIX, Vol. 1: Research Track},
  pages={26--34},
  year={2023}
}

@inproceedings{mittal2024towards,
  title={Towards understanding and mitigating the hallucinations in NLP and Speech},
  author={Mittal, Ashish and Murthy, Rudra and Kumar, Vishwajeet and Bhat, Riyaz},
  booktitle={Proceedings of the 7th Joint International Conference on Data Science \& Management of Data (11th ACM IKDD CODS and 29th COMAD)},
  pages={489--492},
  year={2024}
}

@inproceedings{sravanthi2024pub,
  title={Pub: A pragmatics understanding benchmark for assessing llms’ pragmatics capabilities},
  author={Sravanthi, Settaluri and Doshi, Meet and Tankala, Pavan and Murthy, Rudra and Dabre, Raj and Bhattacharyya, Pushpak},
  booktitle={Findings of the Association for Computational Linguistics: ACL 2024},
  pages={12075--12097},
  year={2024}
}

@article{gala2024airavata,
  title={Airavata: Introducing Hindi Instruction-tuned LLM},
  author={Gala, Jay and Jayakumar, Thanmay and Husain, Jaavid Aktar and Khan, Mohammed Safi Ur Rahman and Kanojia, Diptesh and Puduppully, Ratish and Khapra, Mitesh M and Dabre, Raj and Murthy, Rudra and Kunchukuttan, Anoop and others},
  journal={arXiv preprint arXiv:2401.15006},
  year={2024}
}

@article{sravanthillms,
  title={Do LLMs understand Pragmatics? An Extensive Benchmark for Evaluating Pragmatic Understanding of LLMs},
  author={Sravanthi, Settaluri Lakshmi and Doshi, Meet and Tankala, Pavan Kalyan and Murthy, Rudra and Bhattacharyya, Pushpak}
}

@inproceedings{singh2025indic,
  title={Indic qa benchmark: A multilingual benchmark to evaluate question answering capability of llms for indic languages},
  author={Singh, Abhishek Kumar and Kumar, Vishwajeet and Murthy, Rudra and Sen, Jaydeep and Mittal, Ashish and Ramakrishnan, Ganesh},
  booktitle={Findings of the Association for Computational Linguistics: NAACL 2025},
  pages={2607--2626},
  year={2025}
}

@article{doshi2024mistral,
  title={Mistral-SPLADE: LLMs for better Learned Sparse Retrieval},
  author={Doshi, Meet and Kumar, Vishwajeet and Murthy, Rudra and Sen, Jaydeep and others},
  journal={arXiv preprint arXiv:2408.11119},
  year={2024}
}

@misc{chemmengath2024question,
  title={QUESTION GENERATION OVER TABLES AND TEXT},
  author={Chemmengath, Saneem Ahmed and Kumar, Vishwajeet and Sen, Jaydeep and Murthy, Rudra V},
  year={2024},
  month=oct # "~3",
  note={US Patent App. 18/193,975}
}

@article{murthy2024evaluating,
  title={Evaluating the Instruction-following Abilities of Language Models using Knowledge Tasks},
  author={Murthy, Rudra and Kumar, Prince and Venkateswaran, Praveen and Contractor, Danish},
  year={2024}
}

@inproceedings{verma2025milu,
  title={Milu: A multi-task indic language understanding benchmark},
  author={Verma, Sshubam and Khan, Mohammed Safi Ur Rahman and Kumar, Vishwajeet and Murthy, Rudra and Sen, Jaydeep},
  booktitle={Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers)},
  pages={10076--10132},
  year={2025}
}

@article{acharya2024hindi,
  title={Hindi-BEIR: A Large Scale Retrieval Benchmark in Hindi},
  author={Acharya, Arkadeep and Murthy, Rudra and Kumar, Vishwajeet and Sen, Jaydeep},
  journal={arXiv preprint arXiv:2408.09437},
  year={2024}
}

@misc{kumar2024systems,
  title={SYSTEMS AND METHODS TO BUILD ONEQG: A UNIFIED QUESTION GENERATION SYSTEM ACROSS MODALITIES},
  author={Kumar, Vishwajeet and Sen, Jaydeep and Chemmengath, Saneem Ahmed and Murthy, Rudra V},
  year={2024},
  month=nov # "~21",
  note={US Patent App. 18/317,703}
}

@inproceedings{bhat2025ur2n,
  title={UR2N: Unified Retriever and ReraNker},
  author={Bhat, Riyaz Ahmad and Sen, Jaydeep and Murthy, Rudra and Vignesh, P},
  booktitle={Proceedings of the 31st International Conference on Computational Linguistics: Industry Track},
  pages={595--602},
  year={2025}
}

@article{awasthy2025granite,
  title={Granite Embedding Models},
  author={Awasthy, Parul and Trivedi, Aashka and Li, Yulong and Bornea, Mihaela and Cox, David and Daniels, Abraham and Franz, Martin and Goodhart, Gabe and Iyer, Bhavani and Kumar, Vishwajeet and others},
  journal={arXiv preprint arXiv:2502.20204},
  year={2025}
}

@article{kumar2025training,
  title={Training with Pseudo-Code for Instruction Following},
  author={Kumar, Prince and Murthy, Rudra and Bhat, Riyaz and Contractor, Danish},
  journal={arXiv preprint arXiv:2505.18011},
  year={2025}
}

@inproceedings{tomar2025stereotype,
  title={Stereotype Detection as a Catalyst for Enhanced Bias Detection: A Multi-Task Learning Approach},
  author={Tomar, Aditya and Murthy, Rudra and Bhattacharyya, Pushpak},
  booktitle={Findings of the Association for Computational Linguistics: ACL 2025},
  pages={17304--17317},
  year={2025}
}

@article{tomar2025mathematics,
  title={Mathematics Isn't Culture-Free: Probing Cultural Gaps via Entity and Scenario Perturbations},
  author={Tomar, Aditya and Sahoo, Nihar Ranjan and Mittal, Ashish and Murthy, Rudra and Bhattacharyya, Pushpak},
  journal={arXiv preprint arXiv:2507.00883},
  year={2025}
}

@inproceedings{murthy2023semi,
  title={Semi-Structured Object Sequence Encoders},
  author={Murthy, Rudra and Bhat, Riyaz and Gunasekara, Chulaka and Patel, Siva and Wan, Hui and Dhamecha, Tejas and Contractor, Danish and Danilevsky, Marina},
  booktitle={Findings of the Association for Computational Linguistics: EMNLP 2023},
  pages={9026--9039},
  year={2023}
}

@article{murthy2024kcif,
  title={KCIF: Knowledge-Conditioned Instruction Following},
  author={Murthy, Rudra and Venkateswaran, Praveen and Kumar, Prince and Contractor, Danish},
  journal={arXiv preprint arXiv:2410.12972},
  year={2024}
}

@inproceedings{asad2025you,
  title={“You are Beautiful, Body Image Stereotypes are Ugly!” BIStereo: A Benchmark to Measure Body Image Stereotypes in Language Models},
  author={Asad, Narjis and Sahoo, Nihar Ranjan and Murthy, Rudra and Nath, Swaprava and Bhattacharyya, Pushpak},
  booktitle={Findings of the Association for Computational Linguistics: ACL 2025},
  pages={24471--24496},
  year={2025}
}

@inproceedings{banerjee2023comparing,
  title={Comparing DAE-based and MASS-based UNMT: Robustness to Word-Order Divergence in English--> Indic Language Pairs},
  author={Banerjee, Tamali and Murthy, Rudra and Bhattacharyya, Pushpak},
  booktitle={Proceedings of the 20th International Conference on Natural Language Processing (ICON)},
  pages={491--496},
  year={2023}
}

@article{awasthy2025granite,
  title={Granite Embedding R2 Models},
  author={Awasthy, Parul and Trivedi, Aashka and Li, Yulong and Doshi, Meet and Bhat, Riyaz and Kumar, Vishwajeet and Yang, Yushu and Iyer, Bhavani and Daniels, Abraham and Murthy, Rudra and others},
  journal={arXiv preprint arXiv:2508.21085},
  year={2025}
}

@inproceedings{balaga2025power,
  title={Power doesn’t reside in size: A Low Parameter Hybrid Language Model (HLM) for Sentiment Analysis in Code-mixed data},
  author={Balaga, Pavan Sai and Karthik, Nagasamudram and Vishwanath, Challa and Sharma, Raksha and Murthy, Rudra and Mittal, Ashish},
  booktitle={Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing},
  pages={14819--14827},
  year={2025}
}

@inproceedings{kunchukuttan2025data,
  title={Data and Model Centric Approaches for Expansion of Large Language Models to New languages},
  author={Kunchukuttan, Anoop and Dabre, Raj and Murthy, Rudra and Khan, Mohammed Safi Ur Rahman and Jayakumar, Thanmay},
  booktitle={Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing: Tutorial Abstracts},
  pages={12--13},
  year={2025}
}
`;
