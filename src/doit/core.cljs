(ns doit.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]))

;; -------------------------
;; Views

(def todos (r/atom   [{:desc "Pasta" :color "red"} {:desc "Hotdog" :color "green"}]))

(defn todo-item [desc color]
  [:li {:style {:color color}} desc])

(defn home-page []
  [:div [:h2 "Welcome to Reagent"]
   [:ul (for [todo @todos] [todo-item (:desc todo) (:color todo)])]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
