export const posts = [
  {
    slug: "bttai-lab-1",
    title: "Break Through Tech AI: Lab 1 Notes",
    date: "26 May 2025",
    content: [
      { type: "heading", text: "Overview" },
      { type: "list", items: [
          { text: "Artificial Intelligence", highlight: true, desc: "mimicking human intelligence (rules/logic)" },
          { text: "Machine Learning", highlight: true, desc: "use experience (data) to improve at tasks (learn patterns)" },
          { text: "Deep Learning", highlight: true, desc: "neural networks" },
          { text: "Statistics", highlight: true, desc: "numerical methods to analyze data" },
          { text: "Data Science", highlight: true, desc: "interpreting/visualizing/analyzing data" },
          { text: "Supervised Learning", highlight: true, desc: "class of ML problems with labeled data" },
          { text: "Classification", highlight: true, desc: "labels are categorical values" },
          { text: "Regression", highlight: true, desc: "labels are continuous values" },
          { text: "Unsupervised Learning", highlight: true, desc: "class of ML problems with unlabeled data" },
          { text: "Clustering", highlight: true, desc: "grouping similar data points" },
          { text: "Choosing to Use Supervised vs. Unsupervised", highlight: true, desc: "do we have labels already? do we want to explore more labels?" },
          { text: "NumPy", highlight: true, desc: "Python library for working with numbers and arrays; good for math on large lists or matrices" },
          { text: "Pandas", highlight: true, desc: "Python library for working with data tables (like spreadsheets); good for loading, cleaning, analyzing, reshaping data" },
        ]
      },

      { type: "heading", text: "Interview Prep" },
      { type: "paragraph", text: "1. Supervised vs. Unsupervised" },
      {
        type: "list",
        items: [
          { text: "Supervised Learning", highlight: true, desc: "labeled data; e.g., spam/not spam" },
          { text: "Unsupervised Learning", highlight: true, desc: "unlabeled data; e.g., analyzing customer data and clustering groups of similar users" },
        ]
      },

      { type: "paragraph", text: "2. CRISP-DM" },
      {
        type: "list",
        items: [
          { text: "Business Understanding", highlight: true, desc: "what does the business need?" },
          { text: "Data Understanding", highlight: true, desc: "what data do we have? is the data clean?" },
          { text: "Data Preparation", highlight: true, desc: "how do we prepare the data for our model?" },
          { text: "Modeling", highlight: true, desc: "what techniques should we apply to our model?" },
          { text: "Evaluation", highlight: true, desc: "is the model the best suited for our problem?" },
          { text: "Deployment", highlight: true, desc: "how do we make our model available to stakeholders and other users?" },
        ]
      },

      { type: "paragraph", text: "3. When selecting packages for a machine learning project:" },
      {
        type: "list",
        items: [
          { text: "Matplotlib/Seaborn", highlight: true, desc: "for generating graphs" },
          { text: "NumPy", highlight: true, desc: "for manipulating lists" },
          { text: "scikit-learn", highlight: true, desc: "for decision trees and regression" },
        ]
      },

      { type: "paragraph", text: "4. Classification vs. Regression" },
      {
        type: "list",
        items: [
          { text: "Classification", highlight: true, desc: "discrete categories; maximize accuracy; answers 'what class?'" },
          { text: "Regression", highlight: true, desc: "continuous values; minimize error; answers 'how much?'" }
        ]
      },

      { type: "paragraph", text: "5. Real-World Example" },
      { type: "paragraph", text: "One example is predicting bankruptcy risk in the financial industry. At Fitch Group, I worked with time-series accounting data to train machine learning models that learned patterns in company financials. This was well-suited for ML because bankruptcy depends on complex, nonlinear relationships across many features, and ML can capture those patterns better than simple rules or linear models. The objective was to explore how ML could support credit risk assessment." },

      { type: "heading", text: "ML Example" },
      {
        type: "list",
        items: [
          { text: "Example", highlight: true, desc: "Pinterest’s recommendation system; objective: keep users engaged by showing relevant content" },
          { text: "Label", highlight: true, desc: "whether a user clicks on a Pin" },
          { text: "Features", highlight: true, desc: "topic of the pin, author of the pin, engagement rate" },
          { text: "Type of Problem", highlight: true, desc: "classification (binary outcome: click/no click)" },
          { text: "Other Example", highlight: true, desc: "predicting house prices (regression)" },
        ]
      },

      { type: "heading", text: "Churn Prediction" },
      { type: "paragraph", text: "Predicting customer churn helps identify customers at risk of leaving, allowing proactive interventions (e.g., discounts)." },
      {
        type: "list",
        items: [
          { text: "Label", highlight: true, desc: "whether a customer canceled service" },
          { text: "Features", highlight: true, desc: "monthly spend, recent customer service calls, plan age" },
          { text: "Method", highlight: true, desc: "supervised learning, classification" },
          { text: "Data", highlight: true, desc: "billing records (labels), activity logs (features)" },
        ]
      }
    ]
  },
  {
    slug: "bttai-lab-2",
    title: "Break Through Tech AI: Lab 2 Notes",
    date: "2 June 2025",
    content: [
      { type: "heading", text: "Overview" },
      {
        type: "list",
        items: [
          { text: "Data Matrix", highlight: true, desc: "examples, features, labels" },
          { text: "Data Types", highlight: true, desc: "numeric vs. categorical" },
          { text: "Continuous", highlight: true, desc: "any value with a range" },
          { text: "Integer", highlight: true, desc: "whole numbers, counts of items" },
          { text: "Ordinal", highlight: true, desc: "categories with meaningful order" },
          { text: "Nominal", highlight: true, desc: "categories with no order" },
          { text: "Sampling", highlight: true, desc: "goal is to build models that generalize well to new data" },
          { text: "Representative Sample", highlight: true, desc: "select a sample that represents the larger population" },
          { text: "IID", highlight: true, desc: "independent and identically distributed examples" },
          { text: "Independent", highlight: true, desc: "each example gives unique information" },
          { text: "Identical", highlight: true, desc: "examples are from the same world" },
          { text: "Feature Engineering", highlight: true, desc: "select and transform data so it’s suitable for the ML model" },
          { text: "Binary Indicators", highlight: true, desc: "turn categories into yes/no flags" },
          { text: "One Hot Encoding", highlight: true, desc: "represent categorical features as separate binary columns" },
          { text: "Functional Transformations", highlight: true, desc: "apply log, square root, etc. to features" },
          { text: "Interaction Terms", highlight: true, desc: "combine features (e.g., product, ratio)" },
          { text: "Binning", highlight: true, desc: "convert continuous values into ranges" },
          { text: "Scaling", highlight: true, desc: "normalize or standardize values" },
          { text: "Correlation", highlight: true, desc: "strength and direction of linear dependency" },
          { text: "Replacing Outliers", highlight: true, desc: "detect with z-score > 3 or IQR; handle by dropping, replacing, or winsorization (replace with acceptable value to reduce impact of outlier)" },
        ],
      },

      { type: "heading", text: "Interview Prep" },
      {
        type: "list",
        items: [
          { text: "Why Data Preparation?", highlight: true, desc: "garbage in = garbage out; model only as good as data" },
          { text: "Visualization", highlight: true, desc: "reveals patterns, trends, correlations, and outliers" },
          { text: "Outliers", highlight: true, desc: "extreme values far from mean; affect model accuracy" },
          { text: "Handling Outliers", highlight: true, desc: "discard, winsorize, replace with mean/median; detect with z-score > 3, box plots" },
          { text: "Libraries", highlight: true, desc: "Seaborn, Matplotlib, NumPy, Pandas, scikit-learn" },
        ],
      },

      { type: "heading", text: "Assignment" },
      {
        type: "list",
        items: [
          { text: "Modeling Dataset", highlight: true, desc: "data prepared for ML with features, labels, iid rows" },
          { text: "Steps from Raw → Modeling Dataset", highlight: true, desc: "sampling + feature engineering" },
          { text: "Nominal vs. Ordinal", highlight: true, desc: "nominal = unordered categories (colors of rainbow); ordinal = ordered categories (Amazon star ratings)" },
          { text: "Why Visualization?", highlight: true, desc: "identify complex patterns, anomalies, correlations; communicate insights to stakeholders" },
          { text: "Libraries for Visualization", highlight: true, desc: "Matplotlib = customizable; Seaborn = simpler wrapper; others offer interactive plots" },
        ],
      },
    ],
  },
  {
    slug: "bttai-lab-3",
    title: "Break Through Tech AI: Lab 3 Notes",
    date: "9 June 2025",
    content: [
      { type: "heading", text: "Overview" },
      {
        type: "list",
        items: [
          { text: "Generalization", highlight: true, desc: "model works on new, unseen data; minimize loss and maximize accuracy on both training and test sets; avoid overfitting" },
          { text: "Overfitting", highlight: true, desc: "model learns noise instead of true patterns; performs poorly on new data; prevent by evaluating on test sets" },
          { text: "Steps for Training an ML Model", highlight: true, desc: "split data (train/test), initialize model (algorithm + hyperparameters), train on training data, evaluate on test data, tune hyperparameters/add features/try new algorithms to improve" },
          { text: "K-Nearest Neighbors (KNN)", highlight: true, desc: "classification → predict most common class among neighbors; regression → predict average value; closeness defined by distance function (e.g., Euclidean); k = hyperparameter" },
          { text: "Decision Boundary", highlight: true, desc: "line separating classes; smooth = good generalization; jagged = possible overfitting" },
          { text: "Decision Trees", highlight: true, desc: "use entropy and information gain to choose splits; interpretable; can overfit if tree is too deep" },
          { text: "Entropy", highlight: true, desc: "measure of uncertainty/randomness (fair coin flip = high entropy)" },
          { text: "Information Gain", highlight: true, desc: "reduction in entropy when splitting data on a feature" },
          { text: "Bias-Variance Tradeoff", highlight: true, desc: "balance between underfitting (high bias) and overfitting (high variance)" },
          { text: "Bias", highlight: true, desc: "error from overly simple model; high train + test error" },
          { text: "Variance", highlight: true, desc: "sensitivity to small fluctuations; low train error but high test error" },
        ]
      },

      { type: "heading", text: "Interview Prep" },
      { type: "paragraph", text: "1. KNN advantage & disadvantage for movie recommendation" },
      {
        type: "list",
        items: [
          { text: "Advantage", highlight: true, desc: "simple, recommends movies similar to ones you like" },
          { text: "Disadvantage", highlight: true, desc: "computationally expensive with large datasets" },
        ]
      },

      { type: "paragraph", text: "2. KNN vs. Decision Trees" },
      {
        type: "list",
        items: [
          { text: "KNN", highlight: true, desc: "instance-based learning; no model built; good for small datasets or similarity checks" },
          { text: "Decision Trees", highlight: true, desc: "model-based learning; builds interpretable model; good for structured decision-making" },
        ]
      },

      { type: "paragraph", text: "3. Hyperparameter Examples" },
      {
        type: "list",
        items: [
          { text: "KNN", highlight: true, desc: "k = number of neighbors; small k → overfit, large k → underfit" },
          { text: "Decision Trees", highlight: true, desc: "max_depth; too deep → overfit, too shallow → underfit" },
        ]
      },

      { type: "paragraph", text: "4. Overfitting in Decision Trees" },
      { type: "paragraph", text: "Occurs when tree grows too complex (e.g., one sample per leaf). Prevent with hyperparameters like min_samples_leaf or max_depth." },

      { type: "paragraph", text: "5. Why split data into training & testing sets?" },
      { type: "paragraph", text: "To evaluate generalization and prevent overfitting; ensures performance is measured on unseen data." },

      { type: "heading", text: "Assignment" },
      {
        type: "list",
        items: [
          { text: "Decision Trees", highlight: true, desc: "Advantages: simple, interpretable, flexible. Disadvantages: prone to overfitting." },
          { text: "KNN", highlight: true, desc: "Advantages: simple, powerful, no explicit training. Disadvantages: prone to overfitting, sensitive to scale/features, expensive with large data." },
          { text: "Difference between KNN & DT", highlight: true, desc: "DT builds tree structure with entropy reduction; KNN uses similarity between points; choice depends on constraints and performance." },
          { text: "Hyperparameters", highlight: true, desc: "KNN → k; Decision Trees → max_depth, min_samples_split." },
          { text: "Overfitting", highlight: true, desc: "model fits noise; prevent with more data, fewer features, simpler models, hyperparameter tuning, validation sets." },
          { text: "Data Splitting", highlight: true, desc: "train/test sets allow evaluation and selection of models that generalize." },
        ]
      },
      
    ]
  },
  {
    slug: "bttai-lab-4",
    title: "Break Through Tech AI: Lab 4 Notes",
    date: "16 June 2025",
    content: [
      { type: "heading", text: "Overview" },
      {
        type: "list",
        items: [
          { text: "Linear Models", highlight: true, desc: "assume a linear relationship between inputs (X) and the output (Y); represented by linear equations like lines or planes" },
          { text: "Logistic Regression", highlight: true, desc: "supervised learning method for classification; predicts the probability that an input belongs to a class" },
          { text: "Sigmoid Function", highlight: true, desc: "maps linear output into a probability between 0 and 1" },
          { text: "Weights", highlight: true, desc: "parameters the model learns; adjusted to minimize loss" },
          { text: "Loss Function", highlight: true, desc: "measures how far predictions are from true labels; goal is to minimize it" },
          { text: "Gradient Descent", highlight: true, desc: "iterative method to adjust weights in the direction that reduces loss" },
          { text: "Learning Rate", highlight: true, desc: "controls the step size when updating weights" },
          { text: "Hessian", highlight: true, desc: "matrix of second derivatives; shows curvature and helps refine learning rate" },
        ]
      },

      { type: "paragraph", text: "Equation for Logistic Regression:" },
      { type: "paragraph", text: "z = w^{T} * x + b" },
      { type: "paragraph", text: "σ(z) = 1 / (1 + e^{-z})" },
      { type: "paragraph", text: "σ(z) maps any real value into a probability between 0 and 1." },

      { type: "paragraph", text: "Log Loss Function (Cross Entropy):" },
      { type: "paragraph", text: "L(y, p) = -[ y * log(p) + (1 - y) * log(1 - p) ]" },
      { type: "paragraph", text: "Where y ∈ {0,1} is the true label and p is the predicted probability. Wrong, confident predictions give very high loss." },

      { type: "heading", text: "Steps in Logistic Regression" },
      {
        type: "list",
        items: [
          { text: "Fit Linear Model", highlight: true, desc: "z = wᵢ * xᵢ + b" },
          { text: "Apply Sigmoid", highlight: true, desc: "convert z into probability that input belongs to class 1 (the positive class)" },
          { text: "Calculate Log Loss", highlight: true, desc: "measure how good/bad prediction is" },
          { text: "Update Weights", highlight: true, desc: "use gradient descent to reduce loss" },
          { text: "Repeat", highlight: true, desc: "continue until loss is sufficiently small" }
        ]
      },

      { type: "heading", text: "Interview Prep" },
      {
        type: "list",
        items: [
          { text: "Why estimate probabilities?", highlight: true, desc: "because real-world decisions often involve uncertainty; probabilities guide prioritization (e.g., churn prediction)" },
          { text: "Dataset factors when choosing model", highlight: true, desc: "logistic regression works better with linearly separable data and smaller feature sets; decision trees handle non-linear relationships and categorical splits; KNN is sensitive to feature scaling and works better with dense, well-labeled datasets" },
          { text: "When logistic regression is preferable", highlight: true, desc: "when the relationship between features and labels is roughly linear, data is not too large, interpretability matters, and probabilities are useful outputs" },
          { text: "Why logistic regression for churn", highlight: true, desc: "gives probability of churn (binary classification), allowing businesses to rank customers by churn risk" },
          { text: "Role of the loss function", highlight: true, desc: "quantifies prediction error; logistic regression uses log loss to penalize confident wrong predictions more heavily" },
          { text: "Regularization", highlight: true, desc: "adds penalty to large weights; discourages over-reliance on individual features and prevents overfitting" },
        ]
      },

      { type: "heading", text: "Assignment" },
      {
        type: "list",
        items: [
          { text: "Linear Model", highlight: true, desc: "assumes linear relationship between X and Y; advantages: simple, interpretable, less prone to overfitting; disadvantages: can’t capture complex patterns" },
          { text: "Logistic Regression Task", highlight: true, desc: "best for classification problems; e.g., predicting whether a customer churns" },
          { text: "Training Phase", highlight: true, desc: "involves computing log loss, adjusting weights via gradient descent, and iterating until loss is minimized" },
          { text: "Purpose of Regularization", highlight: true, desc: "constrains model flexibility; prevents overfitting by penalizing overly large coefficients" },
          { text: "Which Linear Model & Loss Function", highlight: true, desc: "use logistic regression with log loss for classification; use linear regression with mean squared error (MSE) for regression" },
        ]
      }
    ]
  },
  ];