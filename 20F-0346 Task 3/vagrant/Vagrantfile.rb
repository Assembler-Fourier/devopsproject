Vagrant.configure("2") do |config|
  config.vm.define "app1" do |app1|
    app1.vm.box = "ubuntu/bionic64"
    # Add any necessary configuration for app1
  end

  config.vm.define "app2" do |app2|
    app2.vm.box = "ubuntu/bionic64"
    # Add any necessary configuration for app2
  end

  config.vm.define "app3" do |app3|
    app3.vm.box = "ubuntu/bionic64"
    # Add any necessary configuration for app3
  end
end
