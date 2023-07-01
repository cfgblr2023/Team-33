function Forms() {
  return (
    <div className="App">
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1">
  
              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-5">
                    <label for="full_name">Full Name</label>
                    <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                  </div>

                  <div class="md:col-span-5">
                    <label for="email">Email Address</label>
                    <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
                  </div>

                  <div class="md:col-span-5">
                    <label for="address">Address / Street</label>
                    <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                  </div>

                  <div class="md:col-span-5">
                  <label for="highest-qualification" class="md:col-span-5 ">Highest Qualification:</label>
                    <select name="highest-qualification" id="highest-qualification">
                        <option value="">--Please choose an option--</option>
                        <option value="No formal education">No formal education</option>
                        <option value="Primary education">Primary education</option>
                        <option value="Secondary education">Secondary education or High school</option>
                        <option value="GED">GED</option>
                        <option value="Vocational qualification">Vocational qualification</option>
                        <option value="Bachelor's degree">Bachelor's degree</option>
                        <option value="Master's degree">Master's degree</option>
                        <option value="Doctorate or higher">Doctorate or Higher</option>
                    </select>
                  </div>

                  <div class="md:col-span-5">
                  <label for="avatar">Upload Document: </label>
                  <p>Add relevant Identity card, Marksheets or Bonafide Certificate</p>
                  <input type="file" id="avatar" name="avatar"></input>
                  </div>

                  <div class="md:col-span-5">
                  <label for="avatar">Upload Govt ID Proof: </label>
                  <input type="file" id="avatar" name="avatar"></input>
                  </div>
                  
                  <div class="md:col-span-5">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="password" />
                  </div>
          
                  <div class="md:col-span-5 text-center">
                    <div class="inline-flex items-end">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Forms;
