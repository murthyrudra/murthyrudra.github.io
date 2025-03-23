+++
title = "Monolingual NER Results for various Languages"
date = 2019-02-04T22:34:35+05:30
subtitle = ""
summary = ""
authors = []
tags = ['named entity recognition', 'Indian Languages', 'European Languages']
categories = ['named entity recognition', 'Indian Languages', 'European Languages']
featured = false
draft = false


# List format.
#   0 = Simple
#   1 = Detailed
#   2 = Stream
list_format = 2

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""
discussionId = 2
+++

The Neural NER system implemented by me as part of the papers [TALLIP paper](/publication/low-resource-tallip/) and [ACL 2018 Paper](/publication/p-18-2064/) achieves the following *F1-Scores* on various languages.

## Results
|  Language |                             Dataset                            |                                            Word Embeddings                                            |                                  Reference                                 | F1 Score |
|:---------:|:--------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------:|:--------:|
| English   | [CoNLL 2003](https://www.clips.uantwerpen.be/conll2003/ner/)   | [Spectral Embeddings](http://www.pdhillon.com/code.html)                                              | [Arxiv Paper](https://arxiv.org/abs/1607.00198) |    90.94 |
| Spanish   | [CoNLL 2002](https://www.clips.uantwerpen.be/conll2002/ner/)   | Spectral Embeddings                                                                                   | [Arxiv Paper](https://arxiv.org/abs/1607.00198) |    85.75 |
| Dutch     | [CoNLL 2002](https://www.clips.uantwerpen.be/conll2002/ner/)   | Spectral Embeddings                                                                                   | [Arxiv Paper](https://arxiv.org/abs/1607.00198) |    85.20 |
| German    | [Link](https://nlpado.de/~sebastian/software/ner_german.shtml) | Spectral Embeddings                                                                                   | [ACL 2018 Paper](https://arxiv.org/abs/1607.00198)            |    87.64 |
| Italian   | Evalita 2009                                                   | Spectral Embeddings                                                                                   | [ACL 2018 Paper](/publication/p-18-2064/)            |    75.98 |
| Hindi     | FIRE 2014                                                      | [Fasttext Embeddings](https://github.com/facebookresearch/fastText/blob/master/docs/crawl-vectors.md) | [ACL 2018 Paper](/publication/p-18-2064/)            |    64.93 |
| Marathi   | FIRE 2014                                                      | Fasttext Embeddings                                                                                   | [ACL 2018 Paper](/publication/p-18-2064/)            |    61.46 |
| Bengali   | FIRE 2014                                                      | Fasttext Embeddings                                                                                   | [ACL 2018 Paper](/publication/p-18-2064/)            |    55.61 |
| Malayalam | FIRE 2014                                                      | Fasttext Embeddings                                                                                   | [ACL 2018 Paper](/publication/p-18-2064/)            |    64.59 |
| Tamil     | FIRE 2014                                                      | Fasttext Embeddings                                                                                   | [ACL 2018 Paper](/publication/p-18-2064/)            |    65.39 |

PPS: The reason for difference in monolingual NER performance for Bengali, Tamil and Malayalam compared to the published results are due to certain pre-processing steps which were not performed in the ACL 2018 paper. We have observed that some of the sentences have length greater than 200 words. Manually splitting these longer sentences into smaller ones using '|' as delimiter lead to substantial improvement. Also, these models are trained using [common-crawl embeddings](https://github.com/facebookresearch/fastText/blob/master/docs/crawl-vectors.md) as opposed to [wikipedia embeddings](https://fasttext.cc/docs/en/pretrained-vectors.html)
