<template>
<div>
  <h2>Wunschpizza bestellen</h2>
  <div class="container">
  <div class="user-input">
    <input
        placeholder="Enter drücken um eine Zutat hinzuzufügen."
        v-model="input"
        @keyup.enter="addItem()"
        ref="input"
    /><button @click="addItem()">Zutatenliste</button>
  </div>

  <ul v-if="itemList">
    <li v-for="item in itemList" :key="item" class="item"><span>{{ item }}</span>
        <button class="button--remove" @click="deleteItem(item)">Remove</button>
    </li>
  </ul>
  <br />
  <div>{{ curItems }} Zutaten gewählt (Wert zuletzt geändert von {{ oldItems }} auf {{ curItems }})</div>
  <br />
  <button class="button--delete" @click="deleteItem()">Alle Zutaten löschen</button>
  <button class="button--submit" @click="submitOrder()">Bestellung abschicken</button>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      input: '',
      itemList: [],
      curItems: 0,
      oldItems: 0
    }
  },
  watch: {
    curItems: {
      handler: function (newVal, oldVal){
        this.oldItems = oldVal;
      },
      immediate: false,
      deep: true
    }
  },
  methods: {
    addItem() {
      // Don't allow adding to the list if empty
      if (!this.input) return
      this.itemList.push(this.input)
      this.curItems++;
      // Clear the input after adding
      this.input = ''
      // Focus the input element again for quick typing!
      this.$refs.input.focus()
    },
    deleteItem(item) {
      //only for info purposes
      let index = this.itemList.indexOf(item);
      console.log(`item: ${item} at index: ${index}`);
      //no parameter provided ..
      if (item == null){
        //.. deleteAll has been pressed
        this.itemList = [];
        this.curItems=0;
      } else {
        //assign filtered shopping list without deleted item
        this.itemList = this.itemList.filter(el => el !== item);
        this.curItems--;
      }
    }, 
    submitOrder() {
      if (this.itemList.length > 0) {
        alert('Bestellung erfolgreich abgeschickt!');
      } else {
        alert('Eine Bestellung ohne Zutaten kann nicht getätigt werden!');
      }
    }
  },
}
</script>

<style lang="scss">
$color-green: #4fc08d;
$color-grey: #2c3e50;

.container {
  max-width: 600px;
  margin: 80px auto;
}

.item {
  display: flex;
  justify-content: space-between;
}

// Type
.h2 {
  font-size: 21px;
}

.user-input {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  input {
    width: 100%;
    padding: 10px 6px;
    margin-right: 10px;
  }
}

.item {
  display: flex;
  align-items: center;
}

// Buttons
button {
  appearance: none;
  padding: 10px;

  font-weight: bold;
  border-radius: 10px;
  border: none;
  background: $color-grey;
  color: white;
  white-space: nowrap;

  + button {
    margin-left: 10px;
  }
}

.button--submit {
  margin: 0 auto;
  margin-left: 20px;  
  background: green;
}

.button--delete {
  margin: 0 auto;
  background: red;
}

.button--remove {
  background: none;
  color: red;
  text-transform: uppercase;
  font-size: 11px;
  align-self: flex-end;
}

ul {
  display: block;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.25);

  > li {
    color: $color-grey;
    margin-bottom: 4px;
  }
}
</style>
